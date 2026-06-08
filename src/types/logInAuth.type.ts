import { z } from "zod";

export const LogInSchema = z.object({
  email: z.string().trim().pipe(z.email("Invalid email address")),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LogInSchemaType = z.infer<typeof LogInSchema>;
