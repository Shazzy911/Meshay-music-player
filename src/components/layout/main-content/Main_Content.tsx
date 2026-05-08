import React from "react";
import style from "./Main_Content.module.scss";
import { MdOutlineAudiotrack } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";

import MainCombineContent from "@/components/ui/large/main_combine_content/MainCombineContent";

type songType = {
  id: number;
  title: string;
  featuring: string;
  image: string;
  time: string;
};

const songs: songType[] = [
  {
    id: 1,
    title: "Blinding Lights",
    featuring: "The Weeknd",
    time: "3:20",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 2,
    title: "Shallow",
    featuring: "Lady Gaga, Bradley Cooper",
    time: "3:35",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 3,
    title: "Levitating",
    featuring: "Dua Lipa, DaBaby",
    time: "3:23",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 4,
    title: "Bad Guy",
    featuring: "Billie Eilish",
    time: "3:14",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 5,
    title: "Peaches",
    featuring: "Justin Bieber, Daniel Caesar, Giveon",
    time: "3:18",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 6,
    title: "Old Town Road",
    featuring: "Lil Nas X, Billy Ray Cyrus",
    time: "2:37",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 7,
    title: "Señorita",
    featuring: "Shawn Mendes, Camila Cabello",
    time: "3:11",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 8,
    title: "Dance Monkey",
    featuring: "Tones and I",
    time: "3:29",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 9,
    title: "Savage Love",
    featuring: "Jawsh 685, Jason Derulo",
    time: "2:51",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
  {
    id: 10,
    title: "Memories",
    featuring: "Maroon 5",
    time: "3:09",
    image:
      "https://i.pinimg.com/236x/e7/c2/c1/e7c2c1b75414ea7f10d693d39d9f5d7d.jpg",
  },
];

const Main_Content = () => {
  return (
    <div className={style.container}>
      <MainCombineContent
        heading="Top Songs"
        data={songs}
        icon={<MdOutlineAudiotrack />}
      />
      <MainCombineContent
        heading="New Release"
        data={songs}
        icon={<MdAudiotrack />}
      />
      <MainCombineContent
        heading="Podcasts"
        data={songs}
        icon={<FaMicrophone />}
      />
    </div>
  );
};

export default Main_Content;
