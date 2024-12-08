import Opportunity from "@/models/opportunity";
import { getByFieldHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return getByFieldHandler(req, { params: { id } }, Opportunity, "author");
}
