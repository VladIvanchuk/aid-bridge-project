import { searchHandler } from "@/utils/searchHandler";
import { NextRequest } from "next/server";

interface Params {
  key: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return searchHandler(req, params.key);
}
