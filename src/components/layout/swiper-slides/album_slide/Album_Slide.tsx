import React from "react";
import style from "./Album_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { album_slide_types } from "@/types/album_slide.type";

interface AlbumSlideProps {
  props: album_slide_types[]; // The entire array as a prop
}

const Album_Slide: React.FC<AlbumSlideProps> = ({ props }) => {
  return (
    <>
      {props.map(({ id, image, title, sub_title }) => (
        <Link href={`/artist/${id}`} key={id}>
          <div className={style.container}>
            <div className={style.imgContainer}>
              <Image
                src={image || "Image"}
                alt="Image not found"
                height={210}
                width={210}
                className={style.img}
              />
            </div>
            <div className={style.slideInfo}>
              <h3>{title}</h3>
              <p>{sub_title}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Album_Slide;
