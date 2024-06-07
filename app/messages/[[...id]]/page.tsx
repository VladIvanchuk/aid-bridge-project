"use client";
import { ChatList, ChatWindow } from "@/components";
import { MessagesWrapper } from "@/styles/messagesStyles";
import { useEffect, useState } from "react";

const Messages = ({
  params,
}: {
  params: { id: string[] };
}): React.ReactElement => {
  const [currentRoomId, setCurrentRoomId] = useState("");

  useEffect(() => {
    if (params.id) {
      setCurrentRoomId(params.id.join(","));
    }
  }, [params]);

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
