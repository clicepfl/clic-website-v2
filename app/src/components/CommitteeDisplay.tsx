import MemberCard from "./MemberCard";
import Title from "./Title";
import strapi from "@/strapi";
import { ApiPoleMembershipPoleMembership } from "@/types/generated/contentTypes";

export default async function CommitteeDisplay() {
  const members = await strapi.find<ApiPoleMembershipPoleMembership[]>(
    "pole-memberships",
    {
      populate: ["member", "member.picture"],
      filters: { level: "Comité" },
    }
  );

  return (
    <div className="pt-6 pb-12 px-8 rounded-3xl w-fit items-center justify-center bg-white">
      <Title text="COMITE" />
      <p className="text-center">Notre équipe de bénévoles</p>
      <div className="flex flex-wrap items-center justify-center mt-4 gap-2">
        {members.data.map((m) => (
          <MemberCard
            key={m.attributes.member.data.name}
            member={m.attributes.member.data}
            membership={m}
          />
        ))}
      </div>
    </div>
  );
}
