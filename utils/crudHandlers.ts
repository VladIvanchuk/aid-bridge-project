import dbConnect from "@/lib/mongodb";
import { Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function createHandler(req: NextRequest, Model: Model<any>) {
  await dbConnect();
  try {
    const data = await req.json();
    const record = await Model.create(data);
    return NextResponse.json(
      { message: "Created", data: record },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function getAllHandler(Model: Model<any>) {
  await dbConnect();
  try {
    const data = await Model.find({});
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function getByIdHandler(
  req: NextRequest,
  { params }: { params: { id: string } },
  Model: Model<any>,
) {
  await dbConnect();
  try {
    const { id } = params;
    const data = await Model.findOne({ _id: id });

    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function updateHandler(
  req: NextRequest,
  { params }: { params: { id: string } },
  Model: Model<any>,
) {
  await dbConnect();
  try {
    const { id } = params;
    const updatedData = await req.json();
    const data = await Model.findByIdAndUpdate(id, updatedData, { new: true });

    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Updated" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function deleteHandler(
  req: NextRequest,
  { params }: { params: { id: string } },
  Model: Model<any>,
) {
  await dbConnect();
  try {
    const { id } = params;
    const data = await Model.findByIdAndDelete(id);

    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
