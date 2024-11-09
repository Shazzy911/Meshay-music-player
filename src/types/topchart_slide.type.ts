import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface topchart_slide_types {
  id: number;
  image?: StaticImageData | HTMLImageElement | string | StaticImport;
  chart_name: string;
  artist_name: string;
}
