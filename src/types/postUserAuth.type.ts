import { z } from "zod";

export const UserFormData = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),

  email: z.string().trim().pipe(z.email("Invalid email address")),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),

  provider: z.enum(["credentials", "google", "facebook"]),

  providerId: z.string().optional(),
});

export type UserFormType = z.infer<typeof UserFormData>;
