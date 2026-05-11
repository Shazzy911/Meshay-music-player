import React, { Suspense } from "react";
import "./page.module.scss";
import Loader from "@/components/ui/small/loader/Loader";
import Artist_Page_Slide from "@/components/layout/swiper-slides/artist_page_slide/Artist_Page_Slide";
import Artist_Page_Swiper from "@/components/layout/swiper/artist-page-swiper/Artist_Page_Swiper";
import Song from "@/components/ui/large/song-rows/SongRow";
import style from "./page.module.scss";
import { fetchAlbumById } from "@/lib/api/fetchAlbumById";

type Props = {
  params: Promise<{ albumId: string }>;
};

const page = async ({ params }: Props) => {
  const { albumId } = await params;
  console.log("ALBUM ID:", albumId);

  const albums = await fetchAlbumById(albumId);

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
          {albums?.songs?.length ? (
            <Song
              item={albums.songs}
              artistName={albums.artist?.name || "Unknown Artist"} // ✅
            />
          ) : (
            <p>No songs found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
