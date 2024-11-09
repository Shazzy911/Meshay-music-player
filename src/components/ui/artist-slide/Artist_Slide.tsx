import React from "react";
import style from "./Artist_Slide.module.scss";

import Link from "next/link";
import { artist_slide_json } from "@/json/artist_slide.json";
import Image from "next/image";
const Artist_Slide = () => {
  return (
    <>
      {artist_slide_json.map(({ id, image, artist_name, feature }) => (
        <Link href={`/artist/${id}`} key={id}>
          <div className={style.container}>
            <div className={style.imgContainer}>
              <Image
                src={image || "Image"}
                alt="Image not found"
                height={200}
                width={200}
              />
            </div>
            <div className={style.slideInfo}>
              <h3>{artist_name}</h3>
              <p>{feature}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Artist_Slide;
