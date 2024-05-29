"use client";
import { ProfileOppContainer } from "@/styles/ProfileStyles";
import { VolunteersItem } from "..";

const ProfileOpportunities = (): React.ReactElement => {
  return (
    <ProfileOppContainer>
      {[...Array(8)].map((_, index) => (
        <VolunteersItem key={index} />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileOpportunities;
