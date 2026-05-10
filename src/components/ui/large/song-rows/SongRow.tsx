"use client";

import { useDispatch } from "react-redux";
import { playSong } from "@/redux/slices/playerSlice";
import style from "./SongRow.module.scss";
import Image from "next/image";
import { FaPlay, FaStopwatch } from "react-icons/fa";
import Link from "next/link";

type AlbumType = {
  id: string;
  title: string;
};

type SongDataType = {
  id: string;
  title: string;
  img: string;
  duration: number;
  songUrl: string;
  genre?: string;
  isExplicit?: boolean;
  playCount?: number;
  releaseDate?: string;
  album?: AlbumType;
};

type SongProps = {
  item: SongDataType[];
  artistName: string;
};

const SongRow: React.FC<SongProps> = ({ item, artistName }) => {
  const dispatch = useDispatch();

  const handlePlay = (index: number) => {
    dispatch(playSong(index));
  };

  return (
    <div className={style.container}>
      <div className={style.headerRow}>
        <span>Track</span>
        <span>Album</span>
        <span>
          <FaStopwatch />
        </span>
      </div>

      {item.map((song, index) => (
        <div key={song.id} className={style.info}>
          <div className={style.content} onClick={() => handlePlay(index)}>
            <div className={style.img_box}>
              <Image
                src={song.img}
                height={55}
                width={55}
                alt={song.title}
                className={style.image}
              />
              <div className={style.overlay}>
                <span className={style.icon}>
                  <FaPlay />
                </span>
              </div>
            </div>

            <div className={style.details}>
              <p className={style.title}>{song.title}</p>
              <p className={style.artistName}>{artistName}</p>
            </div>
          </div>

          <div>
            {song.album ? (
              <Link
                href={`/collection/${song.album.id}`}
                className={style.albumLink}
              >
                {song.album.title}
              </Link>
            ) : (
              <span>—</span>
            )}
          </div>

          <span>{song.duration}s</span>
        </div>
      ))}
    </div>
  );
};

export default SongRow;
