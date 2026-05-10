import React, { Suspense } from "react";
import "./page.module.scss";
import Loader from "@/components/ui/small/loader/Loader";
import Artist_Page_Slide from "@/components/layout/swiper-slides/artist_page_slide/Artist_Page_Slide";
import Artist_Page_Swiper from "@/components/layout/swiper/artist-page-swiper/Artist_Page_Swiper";
import SongRow from "@/components/ui/large/song-rows/SongRow";
import style from "./page.module.scss";
import { fetchArtistById } from "@/lib/api/fetchArtistById";
import MusicSystem from "@/components/ui/large/music-list/MusicSystem";

type Props = {
  params: Promise<{ artistId: string }>;
};

const page = async ({ params }: Props) => {
  const { artistId } = await params;
  console.log("ARTIST ID:", artistId);

  const artist = await fetchArtistById(artistId);

  return (
    <main>
      <section className={style.imageSection}>
        <Suspense fallback={<Loader />}>
          <Artist_Page_Swiper>
            <Artist_Page_Slide />
          </Artist_Page_Swiper>
        </Suspense>
      </section>
      <section className={style.songContainer}>
        <div className={style.songs}>
          <MusicSystem songs={artist?.songs || []}>
            <section className={style.songContainer}>
              <div className={style.songs}>
                {artist?.songs?.length ? (
                  <SongRow item={artist.songs} artistName={artist.name} />
                ) : (
                  <p>No songs found.</p>
                )}
              </div>
            </section>
          </MusicSystem>
        </div>
      </section>
    </main>
  );
};

export default page;
