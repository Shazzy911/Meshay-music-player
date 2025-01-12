import Link from "next/link";
import React from "react";
import style from "./SectionInformation.module.scss";
type SectionInformationType = {
  heading: string;
  url: string;
};

const SectionInformation: React.FC<SectionInformationType> = ({
  heading,
  url,
}) => {
  return (
    <div className={style.container}>
      <h1>{heading}</h1>
      <Link href={url}>
        <span>
          <p>See all</p>
        </span>
      </Link>
    </div>
  );
};

export default SectionInformation;
