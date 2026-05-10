"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setQueue } from "@/redux/slices/playerSlice";

type Song = {
  id: string;
  title: string;
  img: string;
  songUrl: string;
  duration: number;
};

type Props = {
  songs: Song[];
  children: React.ReactNode;
};

const MusicSystem = ({ songs, children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (songs?.length) {
      dispatch(setQueue(songs));
    }
  }, [songs, dispatch]);

  return <>{children}</>;
};

export default MusicSystem;
