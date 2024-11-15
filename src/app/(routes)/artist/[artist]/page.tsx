import React, { Suspense } from "react";
import "./page.module.scss";
import Loader from "@/components/ui/loader/Loader";
import Artist_Page_Slide from "@/components/ui/artist_page_slide/Artist_Page_Slide";

/// Lazy loading for better performance.

// Swiper Files Imports
const Artist_Swiper = React.lazy(
  () => import("@/components/layout/artist-page-swiper/Artist_Page_Swiper")
);
const page = () => {
  return (
    <main>
      <section>
        <Suspense fallback={<Loader />}>
          <Artist_Swiper>
            <Artist_Page_Slide />
          </Artist_Swiper>
        </Suspense>
      </section>
    </main>
  );
};

export default page;
