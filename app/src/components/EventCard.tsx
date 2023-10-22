import PageCard from "./PageCard";
import strapi from "@/strapi";
import { ApiEventEvent } from "@/types/generated/contentTypes";

export default async function EventCard({
  id,
  vertical,
}: {
  id: number;
  vertical?: boolean;
}) {
  const event = await strapi.findOne<ApiEventEvent>("events", id, {
    populate: "media",
  });

  return (
    <>
      <PageCard
        imageUrl={event.data.attributes.media.data[0]?.attributes?.url}
        title={event.data.attributes.event_name}
        text={event.data.attributes.small_description}
        vertical={vertical}
        date={event.data.attributes.event_date}
        url={`/events/${id}`}
      />
    </>
  );
}
