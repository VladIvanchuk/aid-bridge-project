import { getTopVolunteersHandler } from "@/utils/userHandlers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return getTopVolunteersHandler(req);
}
