export async function createChatRoom(data: any) {
  const response = await fetch("/api/chat-room", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function getChatRoomsByParticipant(id: string) {
  const response = await fetch(`/api/chat-room/${id}`);
  return response.json();
}
export async function createMessage(data: any) {
  const response = await fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function getMessagesByChatRoom(id: string) {
  const response = await fetch(`/api/message/${id}`);
  return response.json();
}
