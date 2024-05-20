import {
  ChatWindowContainer,
  ChatWindowFooter,
  MessageItem,
  MessageList,
} from "@/styles/messagesStyles";
import { Button, Input } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

const ChatWindow = (): React.ReactElement => {
  return (
    <ChatWindowContainer>
      <MessageList>
        <MessageItem $isSender={true}>Hello</MessageItem>
        <MessageItem $isSender={true}>How are you</MessageItem>
        <MessageItem>I am fine</MessageItem>
      </MessageList>
      <ChatWindowFooter>
        <Input label="Написати повідомлення..." />
        <Button
          color="primary"
          isIconOnly
          startContent={<IoSend />}
          size="lg"
        />
      </ChatWindowFooter>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
