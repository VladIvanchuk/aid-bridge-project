import User from "@/models/user";
import { getUserDataHandler } from "@/utils/userHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest) {
  return getUserDataHandler(req, User);
}

// export async function PUT(req: NextRequest, { params }: { params: Params }) {
//   return updateUserData(req, { params }, User);
// }
