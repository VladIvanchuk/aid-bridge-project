"use client";
import { ChatList, ChatWindow } from "@/components";
import { MessagesWrapper } from "@/styles/messagesStyles";
import { useState } from "react";

const Messages = ({
  params,
}: {
  params: { id: string };
}): React.ReactElement => {
  const [currentRoomId, setCurrentRoomId] = useState(params.id);
  return (
    <MessagesWrapper>
      <ChatWindow currentRoomId={currentRoomId} />
      <ChatList
        currentRoomId={currentRoomId}
        setCurrentRoomId={setCurrentRoomId}
      />
    </MessagesWrapper>
  );
};

export default Messages;
