import Button from "./Button";
import DirectusImage from "./DirectusImage";
import { getTranslation } from "@/locales";
import styles from "@/styles/NewsCard.module.scss";
import { News } from "@/types/aliases";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsCard({
  news,
  vertical = false,
}: {
  news: News;
  vertical?: boolean;
}) {
  const router = useRouter();

  const translation = getTranslation(news, router.locale);
  return (
    <Link
      href={`/news/${news.slug}`}
      className={`${styles.newsCard} ${vertical ? styles.vertical : ""}`}
    >
      <DirectusImage
        img={translation.banner}
        name={translation.title || ""}
        className={styles.picture}
        cover={true}
      />

      <div className={styles.content}>
        <h2>{translation.title}</h2>
        <p className={styles.description}>{translation.description}</p>
        <div className={styles.details}>
          <p className={styles.date}>
            {news.date_created
              ? new Date(news.date_created).toDateString()
              : ""}
          </p>
        </div>
        <Button className={styles.button} text=">" size="small" />
      </div>
    </Link>
  );
}
