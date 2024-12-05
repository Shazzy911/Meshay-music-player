import React from "react";
import Button from "../button/Button";
import style from "./Podcast_Slide.module.scss";
import Link from "next/link";

const podcast_json = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/236x/eb/d4/22/ebd42242a76502b12a181e935d7420a8.jpg",
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
                padding: "8px 20px",
                fontSize: "1.2rem",
                minHeight: "3rem",
                minWidth: "6rem",
                fontWeight: 400,
                margin: "1.5rem 1rem",
                zIndex: "1",
              }}
            />

            <Button
              text={viewers}
              style={{
                padding: "8px 20px",
                fontSize: "1.2rem",
                minHeight: "3rem",
                minWidth: "6rem",
                fontWeight: 400,
                margin: "1.5rem 1rem",
                zIndex: "1",
              }}
            />
          </div>
          <div className={style.title}>
            <h1>{title}</h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Podcast_Slide;
