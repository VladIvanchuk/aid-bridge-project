"use client";
import { ProfileOppContainer } from "@/styles/ProfileStyles";
import { Loader, VolunteersItem } from "..";
import { useState, useEffect } from "react";

const ProfileOpportunities = (): React.ReactElement => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }
  return (
    <ProfileOppContainer>
      {[...Array(8)].map((_, index) => (
        <VolunteersItem key={index} />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileOpportunities;
