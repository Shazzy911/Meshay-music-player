import React from "react";
import style from "./Artist_Slide.module.scss";

import Link from "next/link";
import Image from "next/image";

interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  img: string;
  updatedAt: string;
  createdAt: string;
}

interface ArtistSlideProps {
  data: Artist[] | undefined;
}

const Artist_Slide = async ({ data }: ArtistSlideProps) => {
  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <Link href={`/artist/${item.id}`} key={item.id}>
            <div className={style.container}>
              <div className={style.imgContainer}>
                <Image
                  src={item.img || "Image"}
                  alt="Image not found"
                  height={200}
                  width={200}
                  // layout="responsive" // Automatically adjusts to the image's original dimensions
                  // objectFit="cover" // Fills the container without stretching
                />
              </div>
              <div className={style.slideInfo}>
                <h3>{item.name}</h3>
                <p>Artist</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Error while fetching</p> // Fallback if data is undefined or empty
      )}
    </>
  );
};

export default Artist_Slide;
