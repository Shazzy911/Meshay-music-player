import React from "react";
import style from "./TopChart_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { topchart_slide_json } from "@/json/topchart_slide.json";
const TopChart_Slide = () => {
  return (
    <>
      {topchart_slide_json.map(({ id, image, artist_name, chart_name }) => (
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
              <h3>{chart_name}</h3>
              <p>{artist_name}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopChart_Slide;
