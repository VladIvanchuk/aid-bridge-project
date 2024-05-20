"use client";
import styled from "styled-components";

export const MessagesWrapper = styled.div`
  display: flex;
  height: calc(100% - 100px);
  width: 100%;
  gap: 24px;
`;
export const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border-right: 2px solid var(--base-accent);
  justify-content: end;
  padding-right: 24px;
  gap: 36px;
`;
export const ChatWindowFooter = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
`;
export const MessageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MessageItem = styled.div<{ $isSender?: boolean }>`
  display: flex;
  background-color: ${(props) =>
    !props.$isSender ? "var(--base-accent)" : "#fff"};
  color: ${(props) => (props.$isSender ? " var(--base-accent)" : "#fff")};
  border-radius: 15px;
  width: fit-content;
  padding: 4px 8px;
  align-self: ${(props) => (props.$isSender ? "auto" : "flex-end")};
`;

export const ChatListContainer = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  padding: 0 4px;
  flex-direction: column;
  gap: 8px;
`;
export const ChatListItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.$isActive ? "var(--base-accent)" : "#f5f5f5"};
  height: fit-content;
  border-radius: 15px;
`;
