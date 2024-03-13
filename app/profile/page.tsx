import { ProfileBody, ProfileHeader } from "@/components";
import { ProfileContainer } from "@/styles/ProfileStyles";

const Profile = (): React.ReactElement => {
  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileBody />
    </ProfileContainer>
  );
};

export default Profile;
