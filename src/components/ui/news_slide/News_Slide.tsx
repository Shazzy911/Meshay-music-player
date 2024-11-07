import { news_slide_json } from "@/json/news_slide_json";
import React from "react";
import Button from "../button/Button";
import style from "./News_Slide.module.scss";

const News_Slide = () => {
  return (
    <>
      {news_slide_json.map(({ id, image, button, heading, time, comment }) => (
        <div key={id} className={style.container}>
          <div
            style={{
              background: `url(${image}) center center / 420px no-repeat`,
              width: "400px",
              height: "400px",
            }}
          >
            <Button
              text={button}
              style={{
                padding: "5px",
                fontSize: "1.2rem",
                minHeight: "3rem",
                minWidth: "6rem",
                fontWeight: 400,
              }}
            />
          </div>
          <div>
            <h2>{heading}</h2>
            <span>
              <span>{time}</span>
              <span>{comment}</span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default News_Slide;
