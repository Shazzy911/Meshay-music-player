"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"; // Import useRouter
const RegisterSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5).max(12),
});
type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);
  const router = useRouter(); // Initialize useRouter
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSuccessMessage(true);
        reset(); // Reset form fields
        setTimeout(() => {
          router.push("/login");
          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        }, 1500); // Hide success message after 3.5 seconds
      } else {
        reset();
        setSuccessMessage(false);
      }
    } catch (error) {
      console.error("Error Posting Contact:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="User Name" {...register("username")} />
      {errors.username && <span className="error">Required</span>}
      <input
        type="email"
        placeholder="E-mail Address"
        {...register("email", {
          pattern: /^\S+@\S+\.\S+$/,
        })}
      />
      {errors.email &&
        (errors.email.type === "required" ? (
          <span className="error">Required</span>
        ) : (
          <span className="error">Invalid email format</span>
        ))}
      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password && <span className="error">Required</span>}
      <button>Register</button>
      {successMessage === true ? (
        <p className="success" style={{ color: "green" }}>
          Register Successfully!
        </p>
      ) : successMessage === false ? (
        <p className="success" style={{ color: "red" }}>
          User Already exist
        </p>
      ) : null}
    </form>
  );
};

export default RegisterForm;
