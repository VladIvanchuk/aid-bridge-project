import Opportunity from "@/models/opportunity";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return createHandler(req, Opportunity);
}

export async function GET() {
  return getAllHandler(Opportunity);
}
