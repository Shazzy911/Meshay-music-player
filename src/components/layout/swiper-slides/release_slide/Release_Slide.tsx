import style from "./Release_Slide.module.scss";
import Image from "next/image";
import Link from "next/link";
import { fetchArtists } from "@/lib/api/fetchArtist";
import MusicSystem from "@/components/ui/large/music-list/MusicSystem";
import SongRow from "../../../ui/large/song-rows/SongRow";

/* ================= TYPES ================= */

type Song = {
  id: string;
  title: string;
  img: string;
  songUrl: string;
  duration: number;
};

type Artist = {
  id: string;
  name: string;
  img?: string;
  songs?: Song[];
};

/* ================= COMPONENT ================= */

const Release_Slide = async () => {
  // IMPORTANT: type your API response
  const artists: Artist[] = await fetchArtists();

  return (
    <>
      {artists?.map((artist) => (
        <div className={style.content} key={artist.id}>
          {/* ARTIST INFO */}
          <div className={style.artist_info}>
            <Link href={`/artist/${artist.id}`}>
              <div className={style.imgContainer}>
                <Image
                  src={artist.img || "/placeholder.jpg"}
                  alt={artist.name}
                  height={420}
                  width={400}
                />

                <div className={style.slideInfo}>
                  <h1>{artist.name}</h1>
                </div>
              </div>
            </Link>
          </div>

          {/* SONG LIST */}
          <MusicSystem songs={artist.songs ?? []}>
            <section className={style.songContainer}>
              <div className={style.songs}>
                {artist.songs && artist.songs.length > 0 ? (
                  artist.songs.map((song) => (
                    <SongRow
                      key={song.id}
                      item={song}
                      artistName={artist.name}
                    />
                  ))
                ) : (
                  <p>No songs found.</p>
                )}
              </div>
            </section>
          </MusicSystem>
        </div>
      ))}
    </>
  );
};

export default Release_Slide;
