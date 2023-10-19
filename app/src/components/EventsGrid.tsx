import EventCard from "./EventCard";
import Title from "./Title";
import strapi from "@/strapi";
import { ApiEventEvent } from "@/types/generated/contentTypes";

export default async function EventsGrid() {
  const events = await strapi.find<(ApiEventEvent & { id: number })[]>(
    "events",
    {
      fields: ["event_date"],
    }
  );
  events.data.sort(
    (a, b) =>
      new Date(a.attributes.event_date as string).getTime() -
      new Date(b.attributes.event_date as string).getTime()
  );

  return (
    <div className="p-10 flex flex-col items-center">
      <Title text="Events" textSize="text-3xl" dark={false} />
      <div className="grid grid-cols-3 mt-6 gap-10">
        {events.data.map((e) => (
          <EventCard id={e.id} vertical />
        ))}
      </div>
    </div>
  );
}
