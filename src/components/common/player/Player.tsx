"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import audioManager from "@/lib/audio/AudioManager";
import style from "./Player.module.scss";

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
} from "react-icons/md";

const Player = () => {
  const dispatch = useAppDispatch();

  const { currentSongIndex, isPlaying, songList } = useAppSelector(
    (state) => state.player,
  );

  const currentSong = songList?.[currentSongIndex];

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🎵 LOAD SONG WHEN SONG CHANGES
  useEffect(() => {
    if (!currentSong?.songUrl) return;

    audioManager.load(currentSong.songUrl);

    const timer = setTimeout(() => {
      setDuration(audioManager.duration());
      setCurrentTime(0);
    }, 200);

    return () => clearTimeout(timer);
  }, [currentSong?.songUrl]);

  // ▶️ PLAY / PAUSE SYNC
  useEffect(() => {
    if (!currentSong?.songUrl) return;

    if (isPlaying) {
      audioManager.play();
    } else {
      audioManager.pause();
    }
  }, [isPlaying, currentSong?.songUrl]);

  // ⏱ LIVE TIMER
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const time = audioManager.seek();
      setCurrentTime(time);
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // 🎛 CONTROLS
  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseSong());
      audioManager.pause();
    } else {
      dispatch(resumeSong());
      audioManager.play();
    }
  };

  const skipNext = () => {
    dispatch(nextSong());
  };

  const skipPrevious = () => {
    dispatch(previousSong());
  };

  const handleSeek = (value: number) => {
    audioManager.seek(value);
    setCurrentTime(value);
  };

  // 🛡️ SAFE FALLBACK UI
  if (!currentSong) {
    return (
      <div className={style.container}>
        <p>No song selected</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {/* 🎵 SONG INFO */}
      <div className={style.detail}>
        <Image
          src={currentSong.img || "/default.jpg"}
          width={60}
          height={60}
          alt={currentSong.title || "song"}
        />

        <div>
          <h4>{currentSong.title}</h4>
          <small>{currentSong.artistName || "--"}</small>
        </div>
      </div>

      {/* 🎛 CONTROLS */}
      <div className={style.controller}>
        <div className={style.icons}>
          <MdSkipPrevious onClick={skipPrevious} />

          {!isPlaying ? (
            <MdPlayCircle onClick={togglePlayPause} />
          ) : (
            <MdPauseCircle onClick={togglePlayPause} />
          )}

          <MdSkipNext onClick={skipNext} />
        </div>

        {/* ⏱ SEEK BAR */}
        <div className={style.time_range}>
          <p>{Math.floor(currentTime)}s</p>

          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
          />

          <p>{Math.floor(duration)}s</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
