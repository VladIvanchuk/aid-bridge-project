import { searchHandler } from "@/utils/searchHandler";
import { NextRequest } from "next/server";

interface Params {
  key: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return searchHandler(req, params.key);
}
