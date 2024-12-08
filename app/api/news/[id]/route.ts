import News from "@/models/news";
import {
  deleteHandler,
  getByIdHandler,
  updateHandler,
} from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return getByIdHandler(req, { params: { id } }, News);
}

export async function PUT(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return updateHandler(req, { params: { id } }, News);
}

export async function DELETE(
  req: NextRequest,
  context: any,
): Promise<Response> {
  const { id } = context.params;
  return deleteHandler(req, { params: { id } }, News);
}
