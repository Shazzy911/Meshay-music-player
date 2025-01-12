import React from "react";
import Button from "../../../ui/small/button/Button";
import style from "./Podcast_Slide.module.scss";
import Link from "next/link";

const podcast_json = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1679079456789-f60b497672bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1583127812417-7c06e950a432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1679079456027-7afd22d1c2e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxwb2RjYXN0fGVufDB8fDB8fHww",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1680037568203-08fb7b56926b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1607805074641-3846c72ed294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwb2RjYXN0fGVufDB8fDB8fHww",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
];

const Podcast_Slide = () => {
  return (
    <>
      {podcast_json.map(({ id, title, image, viewers, button }) => (
        <Link href={`/news/${id}`} key={id}>
          <div
            className={style.container}
            style={{
              background: `url(${image}) center center  no-repeat`,
            }}
          >
            <Button
              text={button}
              style={{
                // padding: "7px 16px",
                // fontSize: "1.2rem",

                padding: "4.5px",
                fontSize: "1.1rem",
                minHeight: "3rem",
                minWidth: "5rem",
                fontWeight: 400,
                zIndex: "1",
              }}
            />

            <div className={style.info}>
              <Button
                text={viewers}
                style={{
                  padding: "7px 15px",
                  fontSize: "1.1rem",
                  minHeight: "3rem",
                  minWidth: "6rem",
                  fontWeight: 400,
                  zIndex: "1",
                  backgroundColor: "#0b1215",
                }}
              />
              <h1>{title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Podcast_Slide;
