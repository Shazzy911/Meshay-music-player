import React from "react";
import style from "./Artist_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { fetchArtists } from "@/lib/api/fetchArtist";

type Artist = {
  id: string;
  name: string;
  img: string;
};

const Artist_Slide = async () => {
  const artists: Artist[] = await fetchArtists();

  if (!Array.isArray(artists) || artists.length === 0) {
    return <p>No artists found</p>;
  }

  return (
    <>
      {artists.map((item) => (
        <div className={style.container} key={item.id}>
          <Link href={`/artist/${item.id}`} className={style.link}>
            <div className={style.imgContainer}>
              <Image
                src={item.img || "/default-artist-image.jpg"}
                alt={item.name || "Artist image"}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                style={{ objectFit: "cover" }}
                quality={90}
                priority={false}
              />
            </div>

            <div className={style.slideInfo}>
              <h3>{item.name}</h3>
              <p>Artist</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Artist_Slide;
