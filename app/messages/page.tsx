import { ChatList, ChatWindow } from "@/components";
import { MessagesWrapper } from "@/styles/messagesStyles";

const Messages = (): React.ReactElement => {
  return (
    <MessagesWrapper>
      <ChatWindow />
      <ChatList />
    </MessagesWrapper>
  );
};

export default Messages;
