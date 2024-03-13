import {
  ProfileBodyContainer,
  ProfileBodyWrapper,
} from "@/styles/ProfileStyles";
import { ProfileTabs, ProfileAside } from "..";

const ProfileBody = (): React.ReactElement => {
  return (
    <ProfileBodyWrapper>
      <ProfileBodyContainer>
        <ProfileTabs />
      </ProfileBodyContainer>
      <ProfileAside />
    </ProfileBodyWrapper>
  );
};

export default ProfileBody;
