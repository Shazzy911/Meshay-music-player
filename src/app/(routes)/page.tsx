import React, { Suspense } from "react";
import Slide from "@/components/layout/slide/Slide";
const Swiper_Main = React.lazy(
  () => import("@/components/layout/swiper_main/Swiper_Main")
);
import style from "./page.module.scss";
import Search from "@/components/ui/search/Search";
import Loader from "@/components/ui/loader/Loader";

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
    </main>
  );
};

export default page;
