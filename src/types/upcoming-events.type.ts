import { StaticImageData } from "next/image";

export interface UpcomingEventType {
  id: number;
  title: string;
  image: StaticImageData | HTMLImageElement | string;
  date: string;
  time: string;
  location: string;
  button: string;
}
