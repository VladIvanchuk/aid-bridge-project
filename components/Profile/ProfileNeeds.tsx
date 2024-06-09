"use client";
import { getOpportunitiesByAuthor } from "@/lib/opportunity/api";
import { INeed } from "@/models/need";
import { ProfileOppContainer } from "@/styles/ProfileStyles";
import { useEffect, useState } from "react";
import { VolunteersItem } from "..";
import { getNeedsByAuthor } from "@/lib/need/api";

const ProfileNeeds = ({
  authorId,
}: {
  authorId: string;
}): React.ReactElement => {
  const [needs, setNeeds] = useState<INeed[]>([]);

  useEffect(() => {
    getNeedsByAuthor(authorId).then((data) => {
      const sortedOpportunities = data.data.sort(
        (a: INeed, b: INeed) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setNeeds(sortedOpportunities);
    });
  }, [authorId]);

  return (
    <ProfileOppContainer>
      {needs.map((need) => (
        <VolunteersItem key={need._id} {...need} />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileNeeds;
