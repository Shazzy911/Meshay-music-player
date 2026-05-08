import React from "react";
import style from "./Album_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { fetchAlbum } from "@/lib/api/fetchAlbum";

type Artist = {
  id: string;
  name: string;
  img: string;
};

const Album_Slide = async () => {
  const albums: Artist[] = await fetchAlbum();

  if (!Array.isArray(albums) || albums.length === 0) {
    return <p>No albums found</p>;
  }

  return (
    <>
      {albums.map((item) => (
        <div className={style.container} key={item.id}>
          <Link href={`/artist/${item.id}`} className={style.link}>
            <div className={style.imgContainer}>
              <Image
                src={item.img || "/default-album-image.jpg"}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                style={{ objectFit: "cover" }}
                quality={90}
                priority={false}
              />
            </div>

            <div className={style.slideInfo}>
              <h3>{item.name}</h3>
              <p>Album</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Album_Slide;
