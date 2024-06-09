import Need from "@/models/need";
import { getByFieldHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  return getByFieldHandler(req, { params }, Need, "author");
}
