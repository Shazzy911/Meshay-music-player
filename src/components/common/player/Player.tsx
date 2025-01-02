"use client";
import Image from "next/image";
import React from "react";
import { songs } from "@/json/songs.json";
import style from "./Player.module.scss";
import { useEffect, useState } from "react";
import useSound from "use-sound";
// import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"// for handling the sound

import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircle,
  MdPauseCircle,
  MdOutlineShuffle,
  MdRepeat,
} from "react-icons/md";

const Player = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current song index
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(songs[currentIndex].file);
  const [currTime, setCurrTime] = useState({ min: "0", sec: "0" });
  const [seconds, setSeconds] = useState(0);
  const durationInSeconds = duration ? duration / 1000 : 0;

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setCurrTime({ min: min.toString(), sec: secRemain.toString() });
    }
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const currentSec = sound.seek([]) || 0;
        setSeconds(currentSec);
        const min = Math.floor(currentSec / 60);
        const sec = Math.floor(currentSec % 60);
        setCurrTime({
          min: min.toString(),
          sec: sec.toString(),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  // Handle skip to next song
  const skipNext = () => {
    pause(); // Stop the current song
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length); // Go to the next song or loop to the first song
  };

  // Handle skip to previous song
  const skipPrevious = () => {
    pause(); // Stop the current song
    setIsPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    ); // Go to the previous song or loop to the last song
  };

  // Play new song when index changes
  useEffect(() => {
    if (isPlaying) {
      play();
    }
  }, [currentIndex, play, isPlaying]);

  return (
    <div className={style.container}>
      <div className={style.detail}>
        <Image
          src={songs[currentIndex].image}
          height={60}
          width={60}
          alt="Image not found"
          // layout="responsive" // Automatically adjusts to the image's original dimensions
          // objectFit="cover" // Fills the container without stretching
        />
        <div>
          <h4>{songs[currentIndex].title}</h4>
          <small>{songs[currentIndex].featuring}</small>
        </div>
      </div>
      <div className={style.controller}>
        <div className={style.icons}>
          <MdOutlineShuffle className={style.small} />
          <MdSkipPrevious className={style.medium} onClick={skipPrevious} />
          {/* {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <MdPlayCircle />
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <MdPauseCircle />
            </button>
          )} */}
          {!isPlaying ? (
            <MdPlayCircle className={style.play} onClick={playingButton} />
          ) : (
            <MdPauseCircle className={style.play} onClick={playingButton} />
          )}
          <MdSkipNext className={style.medium} onClick={skipNext} />
          <MdRepeat className={style.small} />
        </div>
        <div className={style.time_range}>
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <input
            type="range"
            min="0"
            max={durationInSeconds}
            defaultValue="0"
            value={seconds || 0}
            className={style.timeline}
            onChange={(e) => {
              if (sound) sound.seek([parseFloat(e.target.value)]);
            }}
          />
          <p>
            {Math.floor(durationInSeconds / 60)}:
            {Math.floor(durationInSeconds % 60)}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Player;
