import React from "react";
import style from "./Album_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { album_slide_json } from "@/json/album_slide.json";
const Album_Slide = () => {
  return (
    <>
      {album_slide_json.map(({ id, image, artist_name, album_name }) => (
        <Link href={`/artist/${id}`} key={id}>
          <div className={style.container}>
            <div className={style.imgContainer}>
              <Image
                src={image || "Image"}
                alt="Image not found"
                height={210}
                width={210}
              />
            </div>
            <div className={style.slideInfo}>
              <h3>{album_name}</h3>
              <p>{artist_name}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Album_Slide;
