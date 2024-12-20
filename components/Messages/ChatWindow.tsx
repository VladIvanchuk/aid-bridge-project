"use client";
import { useAuth } from "@/contexts/AuthContext";
import { createMessage, getMessagesByChatRoom } from "@/lib/chat/api";
import { IMessage } from "@/models/message";
import {
  ChatWindowContainer,
  ChatWindowFooter,
  MessageItem,
  MessageList,
} from "@/styles/messagesStyles";
import { Button, Input } from "@nextui-org/react";
import mongoose from "mongoose";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

interface ChatWindowProps {
  currentRoomId: string;
}

const ChatWindow = ({ currentRoomId }: ChatWindowProps): React.ReactElement => {
  const [messages, setMessages] = useState<Partial<IMessage>[]>([]);
  const [messageContent, setMessageContent] = useState("");
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const POLL_INTERVAL = 3000;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = useCallback(async () => {
    try {
      const data = await getMessagesByChatRoom(currentRoomId);
      const sortedMessages = data.data.sort(
        (a: IMessage, b: IMessage) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      setMessages(sortedMessages);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }, [currentRoomId]);

  useEffect(() => {
    loadMessages();

    const interval = setInterval(() => {
      loadMessages();
    }, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentRoomId, loadMessages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageContent(e.target.value);
  };

  const sendMessage = async () => {
    if (!messageContent.trim()) return;

    const messageData = {
      chatRoom: new mongoose.Types.ObjectId(currentRoomId),
      sender: user?._id ? new mongoose.Types.ObjectId(user._id) : undefined,
      content: messageContent,
    };

    try {
      const response = await createMessage(messageData);
      console.log("Message created:", response);
      setMessages((prev) => [
        ...prev,
        { ...messageData, _id: response.data._id } as Partial<IMessage>,
      ]);
      setMessageContent("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!messages) return <p>No needs data</p>;

  return (
    <ChatWindowContainer>
      <MessageList>
        {messages.map(({ _id, content, sender }) => (
          <MessageItem $isSender={sender?.toString() === user?._id} key={_id}>
            {content}
          </MessageItem>
        ))}
        <div ref={messagesEndRef} />
      </MessageList>
      <ChatWindowFooter>
        <Input
          label="Написати повідомлення..."
          value={messageContent}
          onChange={handleChange}
        />
        <Button
          color="primary"
          isIconOnly
          startContent={<IoSend />}
          size="lg"
          onClick={sendMessage}
        />
      </ChatWindowFooter>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
