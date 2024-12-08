import { NextRequest } from "next/server";
import Need from "@/models/need";
import {
  getByIdHandler,
  updateHandler,
  deleteHandler,
} from "@/utils/crudHandlers";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return getByIdHandler(req, { params: { id } }, Need);
}

export async function PUT(req: NextRequest, context: any): Promise<Response> {
  const { id } = context.params;
  return updateHandler(req, { params: { id } }, Need);
}

export async function DELETE(
  req: NextRequest,
  context: any,
): Promise<Response> {
  const { id } = context.params;
  return deleteHandler(req, { params: { id } }, Need);
}
