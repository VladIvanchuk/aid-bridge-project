import Need from "@/models/need";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, Need);
}

export async function GET() {
  return getAllHandler(Need);
}
