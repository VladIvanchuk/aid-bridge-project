"use client";
import { ProfileBody, ProfileHeader } from "@/components";
import { getUserById } from "@/lib/user/api";
import { IUser } from "@/models/user";
import { ProfileContainer } from "@/styles/ProfileStyles";
import { useEffect, useState } from "react";

const Profile = ({ params }: { params: any }): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserById(params.id);
        setUser(data.data);
      } catch (err: unknown) {
        console.log(err);
      }
    }
    if (!user) {
      fetchData();
    }
  }, [params.id, user]);

  return (
    <ProfileContainer>
      <ProfileHeader {...user} />
      <ProfileBody user={user} />
    </ProfileContainer>
  );
};

export default Profile;
