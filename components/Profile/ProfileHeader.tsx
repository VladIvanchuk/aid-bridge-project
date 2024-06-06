"use client";

import { useAuth } from "@/contexts/AuthContext";
import { BestVolunteersListRate } from "@/styles/HomeStyles";
import {
  ProfileHeaderContainer,
  ProfileHeaderRight,
  ProfileHeaderWrapper,
  ProfileName,
  ProfileRole,
  ProfileText,
} from "@/styles/ProfileStyles";
import { Avatar, Button } from "@nextui-org/react";
import { FaPencilAlt, FaStar } from "react-icons/fa";

const ProfileHeader = (): React.ReactElement => {
  const { user } = useAuth();

  return (
    <ProfileHeaderWrapper>
      <ProfileHeaderContainer>
        <Avatar
          src={user?.userProfile.profilePhoto}
          style={{ width: "150px", height: "150px" }}
          className="w-38 h-38"
          showFallback
          classNames={{
            icon: "text-black/20",
          }}
        />
        <ProfileText>
          <ProfileName>{user?.userProfile.username}</ProfileName>
          <ProfileRole>{user?.userProfile.role}</ProfileRole>
        </ProfileText>
      </ProfileHeaderContainer>
      <ProfileHeaderRight>
        <BestVolunteersListRate>
          {user?.userProfile.rating ? (
            <>
              <p>{user?.userProfile.rating}/5</p>
              <FaStar />
            </>
          ) : (
            <>
              <p>5/5</p>
              <FaStar />
            </>
          )}
        </BestVolunteersListRate>
        {/* <Button color="primary" endContent={<FaPencilAlt />}>
          Edit Profile
        </Button> */}
      </ProfileHeaderRight>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
