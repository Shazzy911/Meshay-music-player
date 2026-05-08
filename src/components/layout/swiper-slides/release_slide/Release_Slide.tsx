import React from "react";
import style from "./Release_Slide.module.scss";
import Image from "next/image";
import Link from "next/link";
import Song from "../../../ui/large/song/Song";
import { release } from "@/json/top_singers";

const Release_Slide = () => {
  return (
    <>
      {release.map(({ id, newImage, mainTitle, songs }) => (
        <div className={style.content} key={id}>
          <div className={style.artist_info}>
            <Link href={`artist/${id}`}>
              <div className={style.imgContainer}>
                <Image
                  src={newImage || "Image"}
                  alt="Image not found"
                  height={420}
                  width={400}
                />
                {/* Overlay Info */}
                <div className={style.slideInfo}>
                  <h1>{mainTitle}</h1>
                  {/* <p>{subTitle}</p> */}
                </div>
              </div>
            </Link>
          </div>
          <Song item={songs} />
        </div>
      ))}
    </>
  );
};

export default Release_Slide;
