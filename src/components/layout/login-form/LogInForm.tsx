"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"; // Import useRouter
const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(12),
});
type LogInSchemaType = z.infer<typeof LogInSchema>;

const LogInForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LogInSchemaType>({ resolver: zodResolver(LogInSchema) });

  const onSubmit: SubmitHandler<LogInSchemaType> = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
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
          setSuccessMessage(false);
          router.push("/login");
        }, 3500); // Hide success message after 3.5 seconds
      }
    } catch (error) {
      console.error("Error Posting Contact:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button>Log In</button>
      {successMessage && (
        <p className="success" style={{ color: "green" }}>
          Submitted successfully!
        </p>
      )}
    </form>
  );
};

export default LogInForm;
