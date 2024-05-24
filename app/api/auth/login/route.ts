import User from "@/models/user";
import { loginHandler } from "@/utils/authHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return loginHandler(req, User);
}
