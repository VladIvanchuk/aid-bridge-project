import User from "@/models/user";
import { getByIdHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return getByIdHandler(req, { params: { id } }, User);
}
