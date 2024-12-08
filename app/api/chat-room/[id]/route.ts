import { getChatRoomsByParticipant } from "@/utils/chatHandlers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;

  return getChatRoomsByParticipant(req, { params: { id } });
}
