"use client";
import { useAuth } from "@/contexts/AuthContext";
import { getChatRoomsByParticipant } from "@/lib/chat/api";
import { IChatRoom } from "@/models/chatRoom";
import { ChatListContainer } from "@/styles/messagesStyles";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import ChatListItem from "./ChatListItem";

interface ChatListProps {
  currentRoomId: string;
  setCurrentRoomId: React.Dispatch<React.SetStateAction<string>>;
}
const ChatList = ({
  currentRoomId,
  setCurrentRoomId,
}: ChatListProps): React.ReactElement => {
  const [chatRooms, setChatRooms] = useState<IChatRoom[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    getChatRoomsByParticipant(user?._id).then((data) => {
      setChatRooms(data.data);
      setLoading(false);
    });
  }, [user?._id]);

  useEffect(() => {
    if (!currentRoomId && chatRooms && chatRooms.length > 0) {
      setCurrentRoomId(chatRooms[0]._id);
    }
  }, [chatRooms, currentRoomId, setCurrentRoomId]);

  if (!chatRooms) return <p>У вас немає чатів</p>;

  return (
    <ChatListContainer>
      {isLoading ? (
        <Loader isFullscreen />
      ) : (
        chatRooms.map((chatRoom) => (
          <ChatListItem
            key={chatRoom._id}
            {...chatRoom}
            currentUser={user?._id}
            currentRoomId={currentRoomId}
            setCurrentRoomId={setCurrentRoomId}
          />
        ))
      )}
    </ChatListContainer>
  );
};

export default ChatList;
