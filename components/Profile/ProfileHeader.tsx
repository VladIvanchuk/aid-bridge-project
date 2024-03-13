import { BestVolunteersListRate } from "@/styles/HomeStyles";
import {
  ProfileHeaderWrapper,
  ProfileHeaderContainer,
  ProfileDescription,
  ProfileName,
  ProfileText,
  ProfileRole,
  ProfileHeaderRight,
} from "@/styles/ProfileStyles";
import { Avatar, Button } from "@nextui-org/react";
import { FaPencilAlt, FaStar } from "react-icons/fa";

const ProfileHeader = (): React.ReactElement => {
  return (
    <ProfileHeaderWrapper>
      <ProfileHeaderContainer>
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          className="w-38 h-38"
          showFallback
          classNames={{
            icon: "text-black/20",
          }}
        />
        <ProfileText>
          <ProfileName>Jane Doe</ProfileName>
          <ProfileRole>Volunteer</ProfileRole>
        </ProfileText>
      </ProfileHeaderContainer>
      <ProfileHeaderRight>
        <BestVolunteersListRate>
          {(Math.random() * 10).toFixed(1)}/10
          <FaStar fill="var(--base-accent)" />
        </BestVolunteersListRate>
        <Button color="primary" endContent={<FaPencilAlt />}>
          Edit Profile
        </Button>
      </ProfileHeaderRight>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
