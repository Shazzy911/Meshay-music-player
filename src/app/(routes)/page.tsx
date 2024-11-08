import React, { Suspense } from "react";
import style from "./page.module.scss";
import Search from "@/components/ui/search/Search";
import Loader from "@/components/ui/loader/Loader";
// Slides
import Slide from "@/components/ui/slide_main/Slide_main";
import Event_Slide from "@/components/ui/event_slide/Event_Slide";
import News_Slide from "@/components/ui/news_slide/News_Slide";

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

const page = () => {
  return (
    <main className={style.container}>
      <div className={style.page_search}>
        <Search />
      </div>
      <Suspense fallback={<Loader />}>
        <Swiper_Main>
          <Slide />
        </Swiper_Main>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Event_Swiper>
          <Event_Slide />
        </Event_Swiper>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <News_Swiper>
          <News_Slide />
        </News_Swiper>
      </Suspense>
    </main>
  );
};

export default page;
