import { getMessagesByChatRoom } from "@/utils/chatHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return getMessagesByChatRoom(req, { params: { id } });
}
