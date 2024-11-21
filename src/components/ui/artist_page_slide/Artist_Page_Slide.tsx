import React from "react";
import style from "./Artist_Page_Slide.module.scss";

const artist_page_slides = [
  {
    id: 1,
    image:
      "https://wallpapercat.com/w/full/9/d/1/195709-3840x2160-desktop-4k-lana-del-rey-background.jpg",
  },
  {
    id: 2,
    image: "https://wallpaperaccess.com/full/6686059.jpg",
  },

  {
    id: 3,
    image:
      "https://c4.wallpaperflare.com/wallpaper/758/1002/535/lana-del-rey-wallpaper-preview.jpg",
  },
  {
    id: 4,
    image: "https://wallpaperaccess.com/full/6686294.png",
  },
];

const Artist_Page_Slide = () => {
  return (
    // <>
    <>
      {artist_page_slides.map((item) => (
        <div
          className={style.container}
          key={item.id}
          // style={{ backgroundColor: "red", height: "100%", width: "100%" }}
          style={{
            background: `url(${item.image}) center center / cover no-repeat`,
            width: "100%",
            height: "100%",
          }}
        ></div>
      ))}
    </>
  );
};

export default Artist_Page_Slide;

// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;
