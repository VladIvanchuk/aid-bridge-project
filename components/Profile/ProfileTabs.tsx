"use client";
import { IUser } from "@/models/user";
import {
  ProfileTabItemContainer,
  ProfileTabsContainer,
} from "@/styles/ProfileStyles";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { ProfileOpportunities, ProfileReviews } from "..";
import ProfileNeeds from "./ProfileNeeds";

const ProfileTabs = ({
  _id,
  userProfile,
}: Partial<IUser>): React.ReactElement => {
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
        {userProfile?.role === "Волонтер" ? (
          <Tab key="opp" title="Опубліковані можливості">
            <ProfileTabItemContainer>
              <ProfileOpportunities authorId={_id} />
            </ProfileTabItemContainer>
          </Tab>
        ) : (
          <Tab key="opp" title="Опубліковані потреби">
            <ProfileTabItemContainer>
              <ProfileNeeds authorId={_id} />
            </ProfileTabItemContainer>
          </Tab>
        )}
        <Tab key="reviews" title="Відгуки">
          <ProfileTabItemContainer>
            <ProfileReviews _id={_id} />
          </ProfileTabItemContainer>
        </Tab>
      </Tabs>
    </ProfileTabsContainer>
  );
};

export default ProfileTabs;
