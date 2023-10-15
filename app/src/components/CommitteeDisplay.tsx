import MemberCard from "./MemberCard";
import Title from "./Title";
import {
  ApiAssociationMembershipAssociationMembership,
  ApiMemberMember,
} from "@/types/generated/contentTypes";

export default function CommitteeDisplay({
  members,
}: {
  members: [ApiMemberMember, ApiAssociationMembershipAssociationMembership][];
}) {
  return (
    <div className="pt-6 pb-12 px-8 rounded-3xl w-fit items-center justify-center bg-white">
      <Title text="COMITE" />
      <p className="text-center">Notre équipe de bénévoles</p>
      <div className="flex flex-wrap items-center justify-center mt-4 gap-2">
        {members.map((m) => (
          <MemberCard
            key={m[0].attributes.name}
            member={m[0]}
            membership={m[1]}
          />
        ))}
      </div>
    </div>
  );
}
