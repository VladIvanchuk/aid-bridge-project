import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createChatRoom } from "@/lib/chat/api";
import { IChatRoom } from "@/models/chatRoom";

export const useCreateChat = (authorId: string) => {
  const { user } = useAuth();
  const [data, setData] = useState<Partial<IChatRoom> | null>(null);

  useEffect(() => {
    if (user?._id) {
      setData({
        participants: [authorId, user._id],
      });
    }
  }, [user?._id, authorId]);

  const handleCreate = async () => {
    if (data) {
      try {
        const response = await createChatRoom(data);
        console.log("Chat created:", response);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    } else {
      console.error("User data not available yet.");
    }
  };

  return { handleCreate };
};
