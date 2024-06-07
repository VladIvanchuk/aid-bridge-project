import { getMessagesByChatRoom } from "@/utils/chatHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getMessagesByChatRoom(req, { params });
}
