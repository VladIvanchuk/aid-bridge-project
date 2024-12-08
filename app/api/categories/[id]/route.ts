import { getCategoriesByIdsHandler } from "@/utils/categoriesHandler";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;

  return getCategoriesByIdsHandler(req, { params: { id } });
}
