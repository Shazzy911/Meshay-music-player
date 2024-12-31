import React from "react";
import Image from "next/image";
import Hero from "@/assets/images/Hero4.png";
import style from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={style.container}>
      <Image src={Hero} alt="Image not found" width={40} height={40} />
      <h2>Meshay</h2>
    </div>
  );
};

export default Logo;
