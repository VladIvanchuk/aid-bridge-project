import need from "@/models/need";
import { ChatListContainer, ChatListItem } from "@/styles/messagesStyles";
import { User } from "@nextui-org/react";

const ChatList = (): React.ReactElement => {
  return (
    <ChatListContainer>
      <ChatListItem $isActive>
        <User
          name="Марія Соловей"
          avatarProps={{
            src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
            size: "md",
          }}
        />
      </ChatListItem>
      <ChatListItem>
        <User
          name="Богдан Горобець"
          avatarProps={{
            src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
            size: "md",
          }}
        />
      </ChatListItem>
    </ChatListContainer>
  );
};

export default ChatList;
