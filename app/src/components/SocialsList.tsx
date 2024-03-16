import DirectusImage from "./DirectusImage";
import styles from "@/styles/SocialsList.module.scss";
import { SocialLink } from "@/types/aliases";
import Link from "next/link";

export default function SocialsList({ socials }: { socials: SocialLink[] }) {
  if (socials.length == 0) {
    return;
  }

  var list: any = [];
  socials.forEach((s) => {
    list.push(
      <Link href={s.link || ""}>
        <DirectusImage
          img={s.logo}
          name={s.media_name}
          className={styles.social}
        />
      </Link>
    );
  });

  return (
    <div className={styles.socialsList}>
      <div className={styles.list}>{list}</div>
    </div>
  );
}
