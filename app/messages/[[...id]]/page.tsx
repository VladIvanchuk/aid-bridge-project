"use client";
import { ChatList, ChatWindow } from "@/components";
import { getChatRoomsByParticipant } from "@/lib/chat/api";
import { MessagesWrapper } from "@/styles/messagesStyles";
import { useEffect, useState } from "react";

const Messages = ({
  params,
}: {
  params: { id: string[] };
}): React.ReactElement => {
  const [currentRoomId, setCurrentRoomId] = useState("");

  console.log(currentRoomId);
  useEffect(() => {
    if (params.id) {
      getChatRoomsByParticipant(params.id[0]).then((data) => {
        setCurrentRoomId(data.data[0]._id);
      });
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
