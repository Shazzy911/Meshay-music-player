import Image from "next/image";
import React from "react";
import { songs } from "@/json/songs.json";
import style from "./Player.module.scss";

// import { FaPlay } from "react-icons/fa6";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircle,
  MdOutlineShuffle,
  MdRepeat,
} from "react-icons/md";

const Player = () => {
  return (
    <div className={style.container}>
      <div className={style.detail}>
        <Image
          src={songs[0].image}
          height={60}
          width={60}
          alt="Image not found"
          // layout="responsive" // Automatically adjusts to the image's original dimensions
          // objectFit="cover" // Fills the container without stretching
        />
        <div>
          <h4>{songs[0].title}</h4>
          <small>{songs[0].featuring}</small>
        </div>
      </div>
      <div className={style.controller}>
        <div className={style.icons}>
          <MdOutlineShuffle className={style.small} />
          <MdSkipPrevious className={style.medium} />
          <MdPlayCircle className={style.play} />
          <MdSkipNext className={style.medium} />
          <MdRepeat className={style.small} />
        </div>
        <div className={style.time_range}>
          <p>1:00</p>
          <div className={style.fullRange}>
            <hr className={style.range} />
          </div>
          <p>2:39</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Player;
