"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { logInUser } from "@/lib/api/logInUserAuth";
import { LogInSchema, LogInSchemaType } from "@/types/logInAuth.type";

import style from "./LogInForm.module.scss";
import { oAuthService } from "@/lib/service/oAuthService";

const LogInForm = () => {
  const router = useRouter();

  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LogInSchemaType>({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LogInSchemaType> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("email", data.email);
      formData.append("password", data.password);

      const result = await logInUser(formData);

      if (result.success) {
        setSuccessMessage(true);

        reset();

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setSuccessMessage(false);
      }
    } catch (error) {
      console.error("Login Error:", error);

      setSuccessMessage(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <input type="email" placeholder="Email Address" {...register("email")} />

      {errors.email && (
        <span className={style.error}>{errors.email.message}</span>
      )}

      <input type="password" placeholder="Password" {...register("password")} />

      {errors.password && (
        <span className={style.error}>{errors.password.message}</span>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging In..." : "Log In"}
      </button>

      {successMessage === true && (
        <p className={style.success} style={{ color: "green" }}>
          Logged in successfully!
        </p>
      )}

      {successMessage === false && (
        <p className={style.error} style={{ color: "red" }}>
          Invalid email or password.
        </p>
      )}

      {/* Divider */}
      <div className={style.divider}>
        <hr className={style.line} />
        <span className={style.text}>or continue with</span>
        <hr className={style.line} />
      </div>

      {/* Social Buttons */}
      <div className={style.socialButtons}>
        <button
          type="button"
          onClick={oAuthService.signInWithGoogle}
          className={style.googleButton}
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={15}
            height={15}
          />
          Continue with Google
        </button>

        <button
          type="button"
          onClick={oAuthService.signInWithGithub}
          className={style.githubButton}
        >
          <Image
            src="https://www.svgrepo.com/show/439171/github.svg"
            alt="GitHub"
            width={15}
            height={15}
          />
          Continue with GitHub
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
