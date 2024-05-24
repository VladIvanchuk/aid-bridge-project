import User from "@/models/user";
import { registerHandler } from "@/utils/authHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return registerHandler(req, User);
}
