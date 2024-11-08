import { news_slide_json } from "@/json/news_slide_json";
import React from "react";
import Button from "../button/Button";
import style from "./News_Slide.module.scss";
import { IoMdTime } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa6";
import Link from "next/link";
const News_Slide = () => {
  return (
    <>
      {news_slide_json.map(({ id, image, button, heading, time, comment }) => (
        <Link href={`/news/${id}`} key={id}>
          <div className={style.container}>
            <div
              className={style.imgContainer}
              style={{
                background: `url(${image}) center center  no-repeat`,
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
                  margin: "0 0 2rem 2rem",
                }}
              />
            </div>
            <div className={style.slideInfo}>
              <h2>{heading}</h2>
              <span className={style.info}>
                <span>
                  <IoMdTime />
                  {time}
                </span>
                <span>
                  <FaCommentDots />
                  {comment}
                </span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default News_Slide;
