import style from "./MainCombineContent.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";
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
            <div className={style.img_box}>
              <Image
                src={image || "Image not found"}
                height={55}
                width={55}
                alt="Image not found"
                className={style.image}
              />
              <div className={style.overlay}>
                <Link href={"#"} className={style.icon}>
                  <FaPlay />
                </Link>
                {/* <a href="#" className="icon" title="User Profile">
                  <i className="fa fa-user"></i>
                </a> */}
              </div>
            </div>
            <div className={style.details}>
              <p>{title}</p>
              <small>{featuring}</small>
            </div>
          </div>
          <span>{time}</span>
        </div>
      ))}
    </div>
  );
};

export default MainCombineContent;
