import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createChatRoom } from "@/lib/chat/api";
import { IChatRoom } from "@/models/chatRoom";
import { useRouter } from "next/navigation";

export const useCreateChat = (authorId: string) => {
  const { user } = useAuth();
  const [data, setData] = useState<Partial<IChatRoom> | null>(null);
  const router = useRouter();

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
        router.push(`/messages/${response.data._id}`);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    } else {
      console.error("User data not available yet.");
    }
  };

  return { handleCreate };
};
