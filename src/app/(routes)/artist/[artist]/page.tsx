import React, { Suspense } from "react";
import "./page.module.scss";
import Loader from "@/components/ui/small/loader/Loader";
import Artist_Page_Slide from "@/components/layout/swiper-slides/artist_page_slide/Artist_Page_Slide";
import Artist_Page_Swiper from "@/components/layout/swiper/artist-page-swiper/Artist_Page_Swiper";
import Song from "@/components/ui/large/song/Song";
import { release } from "@/json/top_singers";
import style from "./page.module.scss";

const page = () => {
  const allSongs = release.flatMap((artist) => artist.songs);

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
          <Song item={allSongs} />
        </div>
      </section>
    </main>
  );
};

export default page;
