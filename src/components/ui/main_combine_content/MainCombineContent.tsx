import style from "./MainCombineContent.module.scss";
import Image from "next/image";
import React from "react";

type SongDataType = {
  id: number;
  title: string;
  featuring: string;
  image: string;
  time: string;
};

type CombineType = {
  heading: string;
  data: SongDataType[];
  icon: React.ReactElement;
};

const MainCombineContent: React.FC<CombineType> = ({
  heading,
  data,
  icon: Icon,
}) => {
  return (
    <div className={style.container}>
      <span className={style.mainHeading}>
        {Icon}
        <h1>{heading}</h1>
      </span>

      {data.map(({ id, title, featuring, time, image }) => (
        <div key={id} className={style.info}>
          <div className={style.content}>
            <Image
              src={image || "Image not found"}
              height={55}
              width={55}
              alt="Image not found"
            />
            <div className={style.details}>
              <h5>{title}</h5>
              <p>{featuring}</p>
            </div>
          </div>
          <span>{time}</span>
        </div>
      ))}
    </div>
  );
};

export default MainCombineContent;
