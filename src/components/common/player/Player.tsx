"use client";
import Image from "next/image";
import React from "react";
// import { songs } from "@/json/songs.json";
import style from "./Player.module.scss";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import { useDispatch, useSelector } from "react-redux";
import {
  pauseSong,
  resumeSong,
  nextSong,
  previousSong,
} from "@/redux/slices/playerSlice";

import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircle,
  MdPauseCircle,
  MdOutlineShuffle,
  MdRepeat,
} from "react-icons/md";

const Player = () => {
  const dispatch = useDispatch();

  const { currentSongIndex, isPlaying, songList } = useSelector(
    (state: {
      player: {
        currentSongIndex: number;
        isPlaying: boolean;
        songList: {
          file: string;
          image: string;
          title: string;
          featuring: string;
        }[];
      };
    }) => state.player
  );

  // const [play, { pause, sound, duration }] = useSound(
  //   songList[currentSongIndex]?.file || "",
  //   { interrupt: true }
  // );

  const currentSong = songList[currentSongIndex] || {
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Paris,%20Texas%20(feat.%20SYML).mp3?t=2025-01-02T12%3A01%3A39.900Z",
    image:
      "https://i.pinimg.com/236x/59/f6/3a/59f63a8e006156c86a7cc8116351d93c.jpg",
    title: "Meshay Music",
    featuring: "--",
  };

  const [play, { pause, sound, duration }] = useSound(currentSong.file, {
    interrupt: true,
  });

  // const shuffleSongs = () => {
  //   const shuffledSongs = [...songList].sort(() => Math.random() - 0.5);
  //   dispatch(setSongList(shuffledSongs));
  // };

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

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
      dispatch(pauseSong());
    } else {
      play();
      dispatch(resumeSong());
    }
  };

  const skipNext = () => {
    dispatch(nextSong());
  };

  const skipPrevious = () => {
    dispatch(previousSong());
  };

  return (
    <div className={style.container}>
      <div className={style.detail}>
        <Image
          src={currentSong.image}
          height={60}
          width={60}
          alt="Image not found"
        />
        <div>
          <h4>{currentSong.title}</h4>
          <small>{currentSong.featuring}</small>
        </div>
      </div>
      <div className={style.controller}>
        <div className={style.icons}>
          <MdOutlineShuffle className={style.small} />
          <MdSkipPrevious className={style.medium} onClick={skipPrevious} />
          {!isPlaying ? (
            <MdPlayCircle className={style.play} onClick={togglePlayPause} />
          ) : (
            <MdPauseCircle className={style.play} onClick={togglePlayPause} />
          )}
          <MdSkipNext className={style.medium} onClick={skipNext} />
          <MdRepeat className={style.small} />
        </div>{" "}
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
