import ChatRoom from "@/models/chatRoom";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, ChatRoom);
}
