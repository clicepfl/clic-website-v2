import { DIRECTUS_URL } from "@/directus";
import { components } from "@/types/schema";
import Image, { ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${DIRECTUS_URL}/assets/${src}?width=${width}`;
};

/**
 * Display an Image fetched from the Directus instance
 * @param img unique public identifier of the image .
 */
export default function DirectusImage({
  img,
  name,
  className,
  cover,
}: {
  img?: string | components["schemas"]["Files"] | null;
  name?: string | null;
  className?: string;
  cover?: boolean;
}) {
  if (img) {
    return (
      <div className={className} style={{ position: "relative" }}>
        <Image
          loader={imageLoader}
          src={typeof img === "string" ? img : img.filename_disk || ""}
          fill
          style={{ objectFit: cover ? "cover" : "contain" }}
          alt={name || "image"}
        />
      </div>
    );
  } else {
    return <p>{name}</p>;
  }
}
