// import MainSlider from "./UI/mainslider/MainSlider";
import React , { Suspense } from "react";
const MainSlider = React.lazy(() => import("./UI/mainslider/MainSlider"))
import Slide from "./UI/slide/Slide";
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