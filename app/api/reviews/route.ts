import Review from "@/models/review";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, Review);
}

export async function GET() {
  return getAllHandler(Review);
}
