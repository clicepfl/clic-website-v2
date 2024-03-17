import PreviewImage from "@/assets/galleryPreview.png";
import AssociationDescription from "@/components/AssociationDescription";
import DirectusImage from "@/components/DirectusImage";
import MembersList from "@/components/MembersList";
import NewsCard from "@/components/NewsCard";
import PartnersList from "@/components/PartnersList";
import { directus, populateLayoutProps } from "@/directus";
import { getTranslation, queryTranslations } from "@/locales";
import styles from "@/styles/Homepage.module.scss";
import {
  Association,
  AssociationMembership,
  Member,
  News,
  Partner,
  PublicFiles,
  SocialLink,
} from "@/types/aliases";
import { readItems, readSingleton } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const translation = getTranslation(props.association, router.locale);

  return (
    <>
      <div className={styles.divLogo}>
        <DirectusImage img={translation.banner} className={styles.mainLogo} />
        <img
          src={PreviewImage.src}
          alt="preview"
          className={styles.galleryPreview}
        />
      </div>

      <div className={styles.news}>
        <h1 className="light">News</h1>
        <div className={styles.newsList}>
          {props.news.map((n) => (
            <NewsCard key={(n as any).id} news={n} />
          ))}
        </div>
      </div>

      <PartnersList partners={props.partners} />

      <AssociationDescription
        association={props.association}
        socialLinks={props.socialLinks}
        publicFiles={props.publicFiles}
      />

      <MembersList membership={props.committee} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  association: Association;
  partners: Partner[];
  socialLinks: SocialLink[];
  news: News[];
  committee: (AssociationMembership & { member: Member })[];
  publicFiles: PublicFiles[];
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      association: await directus().request(
        readSingleton("association", queryTranslations)
      ),
      partners: (await directus()
        .request(
          readItems("association_partners", {
            fields: [{ partners_id: ["*"] }],
          })
        )
        .then((result) => result.map((p) => p.partners_id))) as Partner[],
      socialLinks: (await directus()
        .request(
          readItems("association_social_links", {
            fields: [{ social_links_id: ["*"] }],
          })
        )
        .then((result) =>
          result.map((s) => s.social_links_id)
        )) as SocialLink[],
      news: await directus().request(
        readItems("news", {
          limit: 3,
          sort: ["-date_created"],
          ...queryTranslations,
        })
      ),
      committee: (await directus().request(
        readItems("association_memberships", {
          fields: [
            "*",
            { member: ["*"] },
            //@ts-ignore
            { translations: ["*"] },
          ],
          filter: { level: { _eq: "committee" } },
        })
      )) as (AssociationMembership & { member: Member })[],
      publicFiles: await directus().request(
        readItems("association_public_files", {
          fields: ["*", { translations: ["*"], icon: ["*"] }],
        })
      ),
    },
  };
});
