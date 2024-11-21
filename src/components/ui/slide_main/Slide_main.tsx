import React from "react";
import { main_slide } from "@/json/slide_dummy";
import style from "./Slide_main.module.scss";
import SlideButton from "@/components/ui/slide_button/SlideButton";

const Slide = () => {
  return (
    // <>
    <>
      {main_slide.map((item) => (
        <div
          className={style.container}
          key={item.id}
          style={{
            background: `url(${item.image}) center center / cover no-repeat`,
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
