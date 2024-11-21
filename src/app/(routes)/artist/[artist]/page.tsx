import React, { Suspense } from "react";
import "./page.module.scss";
import Loader from "@/components/ui/loader/Loader";
import Artist_Page_Slide from "@/components/ui/artist_page_slide/Artist_Page_Slide";
import Artist_Page_Swiper from "@/components/layout/artist-page-swiper/Artist_Page_Swiper";

/// Lazy loading for better performance.

// Swiper Files Imports
// const Artist_Swiper = React.lazy(
//   () => import("@/components/layout/artist-page-swiper/Artist_Page_Swiper")
// );
const page = () => {
  return (
    <main>
      <section>
        <Suspense fallback={<Loader />}>
          <Artist_Page_Swiper>
            <Artist_Page_Slide />
          </Artist_Page_Swiper>
        </Suspense>
      </section>
    </main>
  );
};

export default page;
