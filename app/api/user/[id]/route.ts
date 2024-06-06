import User from "@/models/user";
import { getByIdHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getByIdHandler(req, { params }, User);
}
