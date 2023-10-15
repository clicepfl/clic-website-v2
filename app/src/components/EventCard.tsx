import PageCard from "./PageCard";
import { ApiEventEvent } from "@/types/generated/contentTypes";

export default function EventCard({
  event,
  vertical,
}: {
  event: ApiEventEvent;
  vertical?: boolean;
}) {
  return (
    <>
      <PageCard
        imageUrl={event.attributes.media.data[0]?.attributes?.url}
        title={event.attributes.event_name}
        text={event.attributes.small_description}
        vertical={vertical}
        date={event.attributes.event_date}
        url={`/events/${(event as any).id}`}
      />
    </>
  );
}
