import { StaticImageData } from "next/image";


export interface slide_dummy_types {
  id: number;
  image:  StaticImageData | string ;
  heading: string;
  description: string;
  btn1: string;
  btn2?: string;
}
