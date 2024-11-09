import React, { Suspense } from "react";
import style from "./page.module.scss";
import Search from "@/components/ui/search/Search";
import Loader from "@/components/ui/loader/Loader";
// Slides
import Main_Slide from "@/components/ui/slide_main/Slide_main";
import Event_Slide from "@/components/ui/event_slide/Event_Slide";
import News_Slide from "@/components/ui/news_slide/News_Slide";
import Artist_Slide from "@/components/ui/artist-slide/Artist_Slide";
import Album_Slide from "@/components/ui/album_slide/Album_Slide";
import TopChart_Slide from "@/components/ui/top-chart_slide/TopChart_Slide";
import SectionInformation from "@/components/ui/section-info/SectionInformation";

/// Lazy loading for better performance.
const Swiper_Main = React.lazy(
  () => import("@/components/layout/swiper_main/Swiper_Main")
);
const Event_Swiper = React.lazy(
  () => import("@/components/layout/event_swiper/Event_swiper")
);
const News_Swiper = React.lazy(
  () => import("@/components/layout/news_swiper/News_Swiper")
);
const Common_Swiper = React.lazy(
  () => import("@/components/layout/common-swiper/Common_Swiper")
);

const page = () => {
  return (
    <main className={style.container}>
      <section className={style.page_search}>
        <Search />
      </section>
      <section>
        <Suspense fallback={<Loader />}>
          <Swiper_Main>
            <Main_Slide />
          </Swiper_Main>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Artists" url="/artist" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper>
            <Artist_Slide />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Albums" url="/album" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper>
            <Album_Slide />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Top Charts" url="/section" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper>
            <TopChart_Slide />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Upcoming Events" url="/events" />
        <Suspense fallback={<Loader />}>
          <Event_Swiper>
            <Event_Slide />
          </Event_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="News Blog" url="/news" />

        <Suspense fallback={<Loader />}>
          <News_Swiper>
            <News_Slide />
          </News_Swiper>
        </Suspense>
      </section>
    </main>
  );
};

export default page;
