import React , { Suspense } from "react";
// import Slide from "@/components/layout/slide/Slide";
// const MainSlider = React.lazy(() => import("@/components/layout/mainslider/MainSlider"));
import style from "./page.module.scss";
import Search from "@/components/ui/search/Search";



const page = () => {
  return (
    <main className={style.container}>
      <div className={style.page_search}>
      <Search/>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <MainSlider>
          <Slide />
        </MainSlider> */}
      </Suspense>


    </main>
  )
}

export default page