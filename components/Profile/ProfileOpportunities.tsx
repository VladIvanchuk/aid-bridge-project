"use client";
import { getOpportunitiesByAuthor } from "@/lib/opportunity/api";
import { INeed } from "@/models/need";
import { ProfileOppContainer } from "@/styles/ProfileStyles";
import { useEffect, useState } from "react";
import { VolunteersItem } from "..";

const ProfileOpportunities = ({
  authorId,
}: {
  authorId: string;
}): React.ReactElement => {
  const [opportunities, setOpportunities] = useState<INeed[]>([]);

  useEffect(() => {
    getOpportunitiesByAuthor(authorId).then((data) => {
      const sortedOpportunities = data.data.sort(
        (a: INeed, b: INeed) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setOpportunities(sortedOpportunities);
    });
  }, [authorId]);

  return (
    <ProfileOppContainer>
      {opportunities.map((need) => (
        <VolunteersItem key={need._id} {...need} />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileOpportunities;
