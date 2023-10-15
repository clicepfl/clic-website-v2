import { STRAPI_URL } from "./strapi";
import { ImageLoaderProps } from "next/image";

export function strapiImageLoader({ src }: ImageLoaderProps) {
  return new URL(src, STRAPI_URL).toString();
}
