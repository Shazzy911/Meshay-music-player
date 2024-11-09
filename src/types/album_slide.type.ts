import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface album_slide_types {
  id: number;
  image?: StaticImageData | HTMLImageElement | string | StaticImport;
  album_name: string;
  artist_name: string;
}
