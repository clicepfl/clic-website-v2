"use client";

import { strapiImageLoader } from "@/loader";
import arrowIcon from "assets/arrow_icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function PageCard({
  imageUrl,
  title,
  text,
  vertical,
  date,
  url,
}: {
  imageUrl: string;
  title: string;
  text: string;
  vertical?: boolean;
  date: string | null;
  url: string;
}) {
  return (
    <div
      className={
        "flex rounded-2xl bg-white w-min h-min relative " +
        (vertical ? "flex-col" : "flex-row")
      }
    >
      <div className="relative w-80 h-60">
        <Image
          alt={title}
          src={imageUrl}
          fill
          loader={strapiImageLoader}
          className={
            "object-cover object-center " +
            (vertical ? "rounded-t-2xl" : "rounded-l-2xl")
          }
        />
      </div>
      <div className="w-80 h-60 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-4">{title}</h1>
          <p>{text}</p>
        </div>
        {date ? (
          <p className="text-sm text-gray-400">
            {new Date(date).toDateString()}
          </p>
        ) : (
          <></>
        )}
        {/* <div className="w-10 h-10 rounded-full absolute bg-blue-600 right-4 bottom-4">
            <div className="w-5 h-5 border-b-4 border-r-4 rounded -rotate-45 absolute right-3 bottom-3" />
          </div> */}
        <Link className="absolute right-4 bottom-4" href={url}>
          <Image className="w-10 h-10" src={arrowIcon} alt="Go to page" />
        </Link>
      </div>
    </div>
  );
}
