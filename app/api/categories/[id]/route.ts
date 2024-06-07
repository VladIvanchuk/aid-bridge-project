import { getCategoriesByIdsHandler } from "@/utils/categoriesHandler";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getCategoriesByIdsHandler(req, { params });
}
