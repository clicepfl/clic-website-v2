import { strapiImageLoader } from "@/loader";
import {
  ApiAssociationMembershipAssociationMembership,
  ApiMemberMember,
  ApiMembershipMembership,
} from "@/types/generated/contentTypes";
import defaultIcon from "assets/default_user_icon.svg";
import Image from "next/image";

export default function MemberCard({
  member,
  membership,
}: {
  member: ApiMemberMember;
  membership?:
    | ApiAssociationMembershipAssociationMembership
    | ApiMembershipMembership;
}) {
  const pictureUrl = member.attributes.picture?.data?.attributes?.url;

  return (
    <div className="flex rounded-lg p-2 w-60 h-24 bg-gray-200 items-center justify-around">
      <Image
        width={80}
        height={80}
        className="rounded-full border-4 border-gray-300 border-solid bg-gray-100"
        alt={member.attributes.name}
        src={pictureUrl ? pictureUrl : defaultIcon}
        loader={pictureUrl ? strapiImageLoader : undefined}
      />
      <div>
        <p className="font-bold text-gray-800">{member.attributes.name}</p>
        {membership ? (
          <p className="text-sm text-gray-500">{membership.attributes.role}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
