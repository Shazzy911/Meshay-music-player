import React from "react";
import style from "./FavoriteLibrary.module.scss";

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

interface FavoriteProps {
  data: Artist[] | undefined;
}

const FavoriteLibrary = ({ data }: FavoriteProps) => {
  return (
    <div className={style.container}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <Link
            className={style.link}
            key={item.id}
            href={`/artist/${item.id}`}
          >
            <span className={style.dynamic_wrapper}>
              <Image
                src={item.img || "/default-image.jpg"}
                height={55}
                width={55}
                alt="Image not found"
              />
              <div>
                <h4>{item.name}</h4>
                <p>Artist</p>
              </div>
            </span>
          </Link>
        ))
      ) : (
        <p>No data available</p> // Fallback if data is undefined or empty
      )}
    </div>
  );
};

export default FavoriteLibrary;
