"use client";

import { useDispatch } from "react-redux";
import { playSong, setSongList } from "@/redux/slices/playerSlice";

import React, { useEffect } from "react";
import style from "./Song.module.scss";
import Image from "next/image";
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
  const dispatch = useDispatch();

  const handlePlay = (index: number) => {
    dispatch(playSong(index));
  };
  useEffect(() => {
    dispatch(setSongList(item)); // Set the song list in Redux
  }, [dispatch, item]);

  return (
    <div className={style.container}>
      {/* Add Header Row */}
      <div className={style.headerRow}>
        <span className={style.header}>Track</span>
        <span className={style.header}>Album</span>
        <span className={style.header}>Duration</span>
      </div>

      {item.map(({ id, title, featuring, time, image, album }) => (
        <div key={id} className={style.info}>
          <div className={style.content} onClick={() => handlePlay(id)}>
            <div className={style.img_box}>
              <Image
                src={image || "Image not found"}
                height={55}
                width={55}
                alt="Image not found"
                className={style.image}
              />
              <div className={style.overlay}>
                <span className={style.icon}>
                  <FaPlay />
                </span>
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
