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
  // const { login } = useContext(AuthContext);

  // const handleLogin = () => {
  //   login();
  // };
  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);
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
        credentials: "include", // Include cookies
      });
      const result = await response.json();

      if (result.success) {
        setSuccessMessage(true);
        reset(); // Reset form fields
        setTimeout(() => {
          router.push("/");
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
      {errors.password && <span className="error">Must not be empty</span>}
      <button>Log In</button>
      {successMessage === true ? (
        <p className="success" style={{ color: "green" }}>
          Log-In Successfully!
        </p>
      ) : successMessage === false ? (
        <p className="success" style={{ color: "red" }}>
          Invalid Email or Password
        </p>
      ) : null}
    </form>
  );
};

export default LogInForm;
