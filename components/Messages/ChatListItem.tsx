"use client";

import { getUserById } from "@/lib/user/api";
import { IChatRoom } from "@/models/chatRoom";
import { IUser } from "@/models/user";
import { ChatListItemContainer } from "@/styles/messagesStyles";
import { User } from "@nextui-org/react";
import { useEffect, useState } from "react";
interface ChatListItemProps {
  currentUser: string;
  currentRoomId: string;
  setCurrentRoomId: React.Dispatch<React.SetStateAction<string>>;
}

const ChatListItem = ({
  _id,
  participants,
  currentUser,
  currentRoomId,
  setCurrentRoomId,
}: Partial<IChatRoom> & ChatListItemProps): React.ReactElement => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const otherUserId = participants?.find(
      (participant) => participant.toString() !== currentUser,
    );
    setUserId(otherUserId ? otherUserId.toString() : null);
  }, [currentUser, participants]);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const data = await getUserById(userId);
          setUserData(data.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          setUserData(null);
        }
      };

      fetchData();
    }
  }, [userId]);

  if (!userId) {
    return <p>No user participants found</p>;
  }
  return (
    <ChatListItemContainer
      $isActive={currentRoomId === _id}
      onClick={() => setCurrentRoomId(_id as string)}
    >
      <User
        name={userData?.userProfile?.username ?? ""}
        avatarProps={{
          src: userData?.userProfile.profilePhoto ?? "",
          size: "md",
        }}
      />
    </ChatListItemContainer>
  );
};

export default ChatListItem;
