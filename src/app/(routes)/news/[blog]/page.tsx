"use client";
import React from "react";

import style from "./page.module.scss";
import Image from "next/image";

const SingleBlog = () => {
  return (
    <div className={style.blogContainer}>
      <h1>The Evolution of Music Streaming</h1>
      <p className={style.date}>February 10, 2025</p>
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1682125848355-4fb0e6da7647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
        }
        width={700}
        height={500}
        alt="Not Found"
        className={style.blogImage}
      />
      <p className={style.blogContent}>
        Every year, music charts are dominated by some of the most talented
        artists. From pop sensations to indie stars, here are the top 10 artists
        who made waves in 2025...
      </p>
    </div>
  );
};

export default SingleBlog;
