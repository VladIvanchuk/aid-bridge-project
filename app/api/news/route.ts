import News from "@/models/news";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, News);
}

export async function GET() {
  return getAllHandler(News);
}
