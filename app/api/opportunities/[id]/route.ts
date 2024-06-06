import { NextRequest } from "next/server";
import Opportunity from "@/models/opportunity";
import {
  getByIdHandler,
  updateHandler,
  deleteHandler,
} from "@/utils/crudHandlers";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getByIdHandler(req, { params }, Opportunity);
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  return updateHandler(req, { params }, Opportunity);
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  return deleteHandler(req, { params }, Opportunity);
}
