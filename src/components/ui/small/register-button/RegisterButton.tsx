"use client"; // ← missing, add this

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { RiLoginCircleFill } from "react-icons/ri";
import style from "./RegisterButton.module.scss";

const RegisterButton = () => {
  const { user, loading } = useAuth();

  return (
    <div>
      {loading ? (
        <div className={style.avatarSkeleton} />
      ) : user ? (
        <Link href="/user" className={style.avatarLink}>
          {user.image ? (
            <Image
              src={user.image}
              alt={user.username}
              width={32}
              height={32}
              className={style.avatar}
            />
          ) : (
            <div className={style.avatarInitial}>
              {user.username?.charAt(0).toUpperCase()}
            </div>
          )}
        </Link>
      ) : (
        <Link href="/register" className={style.registerLink}>
          <h3>Register</h3>
          <RiLoginCircleFill />
        </Link>
      )}
    </div>
  );
};

export default RegisterButton;
