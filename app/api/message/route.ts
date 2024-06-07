import Message from "@/models/message";
import { createHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, Message);
}
