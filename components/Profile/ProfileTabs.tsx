"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ProfileOpportunities, ProfileReviews } from "..";
import {
  ProfileTabItemContainer,
  ProfileTabsContainer,
} from "@/styles/ProfileStyles";

const ProfileTabs = (): React.ReactElement => {
  const [selected, setSelected] = useState("opp");

  const handleSelectionChange = (key: React.Key) => {
    setSelected(key.toString());
  };

  return (
    <ProfileTabsContainer>
      <Tabs
        variant="light"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
      >
        <Tab key="opp" title="Опубліковані можливості">
          <ProfileTabItemContainer>
            <ProfileOpportunities />
          </ProfileTabItemContainer>
        </Tab>
        <Tab key="reviews" title="Відгуки">
          <ProfileTabItemContainer>
            <ProfileReviews />
          </ProfileTabItemContainer>
        </Tab>
      </Tabs>
    </ProfileTabsContainer>
  );
};

export default ProfileTabs;
