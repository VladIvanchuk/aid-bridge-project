"use client";
import { ProfileBody, ProfileHeader } from "@/components";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileContainer } from "@/styles/ProfileStyles";

const Profile = (): React.ReactElement => {
  const { user } = useAuth();

  return (
    <ProfileContainer>
      <ProfileHeader {...user} />
      <ProfileBody user={user} />
    </ProfileContainer>
  );
};

export default Profile;
