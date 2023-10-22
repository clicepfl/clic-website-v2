import PageCard from "./PageCard";
import strapi from "@/strapi";
import { ApiNewsNews } from "@/types/generated/contentTypes";

export default async function NewsCard({
  id,
  vertical,
}: {
  id: number;
  vertical?: boolean;
}) {
  const event = await strapi.findOne<ApiNewsNews>("newss", id, {
    populate: "picture",
  });

  return (
    <>
      <PageCard
        imageUrl={event.data.attributes.picture.data?.attributes?.url}
        title={event.data.attributes.news_title}
        text={event.data.attributes.small_description}
        vertical={vertical}
        date={event.data.attributes.createdAt}
        url={`/news/${id}`}
      />
    </>
  );
}
