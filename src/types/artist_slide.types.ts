import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface artist_slide_types {
  id: number;

  image?: StaticImageData | HTMLImageElement | string | StaticImport;
  artist_name: string;
  feature: string;
}
