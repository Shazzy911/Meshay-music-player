// import MainSlider from "./UI/mainslider/MainSlider";
import React , { Suspense } from "react";
import Slide from "@/components/layout/slide/Slide";
const MainSlider = React.lazy(() => import("@/components/layout/mainslider/MainSlider"));
import style from "./page.module.scss";



const page = () => {
  return (
    <main className={style.container}>
      <Suspense fallback={<p>Loading...</p>}>
        <MainSlider>
          <Slide />
        </MainSlider>
      </Suspense>


    </main>
  )
}

export default page