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

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getByIdHandler(req, { params }, News);
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  return updateHandler(req, { params }, News);
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  return deleteHandler(req, { params }, News);
}
