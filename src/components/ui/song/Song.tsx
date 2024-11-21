import React from "react";
import style from "./Song.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

type SongDataType = {
  id: number;
  title: string;
  featuring: string;
  image: string;
  time: string;
  album: string;
};
type songType = {
  item: SongDataType[];
};

const Song: React.FC<songType> = ({ item }) => {
  return (
    <div className={style.container}>
      {item.map(({ id, title, featuring, time, image, album }) => (
        <div key={id} className={style.info}>
          <div className={style.content}>
            <div className={style.img_box}>
              <Image
                src={image || "Image not found"}
                height={55}
                width={55}
                alt="Image not found"
                className={style.image}
              />
              <div className={style.overlay}>
                <Link href={"#"} className={style.icon}>
                  <FaPlay />
                </Link>
              </div>
            </div>
            <div className={style.details}>
              <p className={style.title}>{title}</p>
              <small>{featuring}</small>
            </div>
          </div>
          <span>{album}</span>
          <span>{time}</span>
        </div>
      ))}
    </div>
  );
};

export default Song;