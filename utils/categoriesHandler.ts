import dbConnect from "@/lib/mongodb";
import Category from "@/models/category";
import { NextRequest, NextResponse } from "next/server";

export async function getCategoriesByIdsHandler(
  req: NextRequest,
  { params }: { params: any },
) {
  await dbConnect();
  try {
    const ids = params.id.split(",") || [];
    const data = await Category.find({
      _id: { $in: ids },
    });

    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
