import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface route_links_types {
  id: number;
  link: string;
  route: string;
  image?: StaticImageData | HTMLImageElement | string;
  icon?: ReactNode;
}
