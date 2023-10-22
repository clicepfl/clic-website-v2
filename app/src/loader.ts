import { CLIENT_STRAPI_URL } from "./strapi";
import { ImageLoaderProps } from "next/image";

export function strapiImageLoader({ src }: ImageLoaderProps) {
  return CLIENT_STRAPI_URL + src;
}
