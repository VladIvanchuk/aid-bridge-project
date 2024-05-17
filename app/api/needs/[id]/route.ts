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

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getByIdHandler(req, { params }, Need);
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  return updateHandler(req, { params }, Need);
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  return deleteHandler(req, { params }, Need);
}
