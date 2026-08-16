"use client";
import { useState } from "react";
import style from "./RegisterForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { UserFormData, UserFormType } from "@/types/registerUserAuth.type";
import { registerUser } from "@/lib/api/postUserAuth";
import SocialButton from "@/components/ui/small/social-button/SocialButton";

const RegisterForm = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormType>({ resolver: zodResolver(UserFormData) });

  const onSubmit: SubmitHandler<UserFormType> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("username", data.username);
      formData.append("email", data.email);

      if (data.password) {
        formData.append("password", data.password);
      }

      formData.append("provider", data.provider);

      if (data.providerId) {
        formData.append("providerId", data.providerId);
      }

      const result = await registerUser(formData);

      if (result.success) {
        setSuccessMessage(true);
        reset();
        setTimeout(() => {
          setSuccessMessage(null);
          router.push("/login");
        }, 2000);
      } else {
        setSuccessMessage(false);
      }
    } catch (error) {
      console.error("Error Posting User:", error);
      setSuccessMessage(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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

      <button type="submit">Register</button>

      {successMessage === true && (
        <p style={{ color: "green" }}>Register Successfully!</p>
      )}
      {successMessage === false && (
        <p style={{ color: "red" }}>User already exists</p>
      )}

      {/* Divider */}
      <div className={style.divider}>
        <hr className={style.line} />
        <span className={style.text}>or continue with</span>
        <hr className={style.line} />
      </div>

      {/* Social Buttons */}
      <SocialButton />
    </form>
  );
};

export default RegisterForm;
