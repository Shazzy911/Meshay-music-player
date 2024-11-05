import { StaticImageData } from "next/image";

export interface favorite_links_types {
  id: number;
  title: string;
  subtitle: string;
  route: string;
  image: StaticImageData | HTMLImageElement | string;
}
