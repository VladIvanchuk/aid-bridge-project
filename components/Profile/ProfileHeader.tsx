"use client";
import { useAuth } from "@/contexts/AuthContext";
import { IUser } from "@/models/user";
import { BestVolunteersListRate } from "@/styles/HomeStyles";
import {
  ProfileHeaderContainer,
  ProfileHeaderRight,
  ProfileHeaderWrapper,
  ProfileName,
  ProfileRole,
  ProfileText,
} from "@/styles/ProfileStyles";
import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { FaEnvelope, FaPencilAlt, FaStar } from "react-icons/fa";
import EditProfile from "./EditProfile";

const ProfileHeader = ({
  _id,
  userProfile,
}: Partial<IUser>): React.ReactElement => {
  const { user } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isCurrentUser = user?._id === _id;

  return (
    <ProfileHeaderWrapper>
      <ProfileHeaderContainer>
        <Avatar
          src={userProfile?.profilePhoto}
          style={{ width: "150px", height: "150px" }}
          className="w-38 h-38"
          showFallback
          classNames={{
            icon: "text-black/20",
          }}
        />
        <ProfileText>
          <ProfileName>{userProfile?.username}</ProfileName>
          <ProfileRole>{userProfile?.role}</ProfileRole>
        </ProfileText>
      </ProfileHeaderContainer>
      <ProfileHeaderRight>
        <BestVolunteersListRate>
          {userProfile?.rating ? (
            <>
              <p>{userProfile?.rating}/5</p>
              <FaStar />
            </>
          ) : (
            <>
              <p>5/5</p>
              <FaStar />
            </>
          )}
        </BestVolunteersListRate>
        {isCurrentUser ? (
          <Button color="primary" endContent={<FaPencilAlt />} onClick={onOpen}>
            Редагувати профіль
          </Button>
        ) : (
          <Button
            color="primary"
            endContent={<FaEnvelope />}
            as={Link}
            href={`/messages/${_id}`}
          >
            Надіслати повідомлення
          </Button>
        )}
      </ProfileHeaderRight>
      <EditProfile isOpen={isOpen} onOpenChange={onOpenChange} {...user} />
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
