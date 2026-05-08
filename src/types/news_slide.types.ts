import { StaticImageData } from "next/image";

export type NewsType = {
  id: number;
  image: StaticImageData | string;
  button: string;
  heading: string;
  time: string;
  comment: number;
};
