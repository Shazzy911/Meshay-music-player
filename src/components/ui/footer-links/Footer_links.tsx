import Link from "next/link";
import React from "react";
import style from "./Footer.links.module.scss";

type FooterlinksType = {
  values: {
    id: number;
    title: string;
    href: string;
  }[];
  heading: string;
};

const Footer_links = ({ values, heading }: FooterlinksType) => {
  return (
    <div className={style.container}>
      <h3>{heading}</h3>
      {values.map((item) => (
        <span key={item.id}>
          <Link href={item.href}>{item.title}</Link>
        </span>
      ))}
    </div>
  );
};

export default Footer_links;
