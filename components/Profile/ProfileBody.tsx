import { IUser } from "@/models/user";
import {
  ProfileBodyContainer,
  ProfileBodyWrapper,
} from "@/styles/ProfileStyles";
import { ProfileAside, ProfileTabs } from "..";

const ProfileBody = ({ user }: { user: IUser | null }): React.ReactElement => {
  return (
    <ProfileBodyWrapper>
      <ProfileBodyContainer>
        <ProfileTabs />
      </ProfileBodyContainer>
      <ProfileAside {...user} />
    </ProfileBodyWrapper>
  );
};

export default ProfileBody;
