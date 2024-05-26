import User from "@/models/user";
import {
  getUserDataHandler,
  updateUserDataHandler,
} from "@/utils/userHandlers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return getUserDataHandler(req, User);
}

export async function PUT(req: NextRequest) {
  return updateUserDataHandler(req, User);
}
