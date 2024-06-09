"use client";
import { getOpportunitiesByAuthor } from "@/lib/opportunity/api";
import { INeed } from "@/models/need";
import { ProfileOppContainer } from "@/styles/ProfileStyles";
import { useEffect, useState } from "react";
import { VolunteersItem } from "..";
import { getNeedsByAuthor } from "@/lib/need/api";
import { useAuth } from "@/contexts/AuthContext";

const ProfileNeeds = ({
  authorId,
}: {
  authorId: string;
}): React.ReactElement => {
  const [needs, setNeeds] = useState<INeed[]>([]);
  const [updateList, setUpdateList] = useState(false);

  const { user } = useAuth();

  const isCurrentUser = user?._id === authorId;

  useEffect(() => {
    getNeedsByAuthor(authorId).then((data) => {
      const sortedOpportunities = data.data.sort(
        (a: INeed, b: INeed) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setNeeds(sortedOpportunities);
      setUpdateList(false);
    });
  }, [authorId, updateList]);

  return (
    <ProfileOppContainer>
      {needs.map((need) => (
        <VolunteersItem
          key={need._id}
          {...need}
          withMenu={isCurrentUser}
          setUpdateList={setUpdateList}
        />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileNeeds;
