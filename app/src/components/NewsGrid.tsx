import NewsCard from "./NewsCard";
import Title from "./Title";
import strapi from "@/strapi";
import { ApiNewsNews } from "@/types/generated/contentTypes";

export default async function EventsGrid() {
  const events = await strapi.find<(ApiNewsNews & { id: number })[]>("newss", {
    fields: ["publication"],
    pagination: { start: 0, limit: 3 },
    sort: ["publication:desc"],
  });
  events.data.sort(
    (a, b) =>
      new Date(a.attributes.createdAt as string).getTime() -
      new Date(b.attributes.createdAt as string).getTime()
  );

  return (
    <div className="p-10 flex flex-col items-center">
      <Title
        text="News"
        textSize="text-5xl font-bold"
        lineSize="w-24 h-1"
        dark={false}
      />
      <div className="grid grid-cols-3 mt-6 gap-10">
        {events.data.map((e) => (
          <NewsCard id={e.id} vertical />
        ))}
      </div>
    </div>
  );
}
