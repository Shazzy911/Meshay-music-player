import React from "react";
import { slide_dummy } from "@/json/slide_dummy";
import style from "./Slide.module.scss";
import SlideButton from "@/components/ui/slide_button/SlideButton";

const Slide = () => {
  return (
    // <>
    <>
      {slide_dummy.map((item) => (
        <div
          className={style.container}
          key={item.id}
          style={{
            background: `url(${item.image}) center center / 1230px no-repeat`,
            // width: "1230px",
            // height: "500px",
          }}
        >
          <div className={style.content}>
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
            <div className={style.button_box}>
              <SlideButton text={item.btn1} />
              {item.btn2 ? <SlideButton text={item.btn2} /> : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Slide;

// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;
