import React from "react";
import style from "./Artist_Page_Slide.module.scss";

const artist_page_slides = [
  {
    id: 1,
    image: "https://wallpaperaccess.com/full/6686051.png",
  },
  {
    id: 2,
    image: "https://wallpaperaccess.com/full/6686059.jpg",
  },

  {
    id: 3,
    image: "https://wallpaperaccess.com/full/6686080.jpg",
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
