"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createChatRoom, getChatRoomsByParticipant } from "@/lib/chat/api";
import { IChatRoom } from "@/models/chatRoom";
import { useRouter } from "next/navigation";
import mongoose from "mongoose";

export const useCreateChat = (authorId: string) => {
  const { user } = useAuth();
  const [data, setData] = useState<Partial<IChatRoom> | null>(null);
  const [chatRooms, setChatRooms] = useState<IChatRoom[]>([]);

  const router = useRouter();

  useEffect(() => {
    getChatRoomsByParticipant(authorId).then((data) => {
      setChatRooms(data.data);
    });
  }, [authorId]);

  useEffect(() => {
    if (user?._id) {
      setData({
        participants: [
          new mongoose.Types.ObjectId(authorId),
          new mongoose.Types.ObjectId(user._id),
        ],
      });
    }
  }, [user?._id, authorId]);

  const handleCreate = async () => {
    if (!chatRooms) {
      try {
        const response = await createChatRoom(data);
        console.log("Chat created:", response);
        router.push(`/messages/${authorId}`);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    } else {
      router.push(`/messages/${authorId}`);
    }
  };

  return { handleCreate };
};
