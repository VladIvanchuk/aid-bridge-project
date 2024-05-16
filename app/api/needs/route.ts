import dbConnect from "@/lib/mongodb";
import Need from "@/models/need";
import { NextResponse } from "next/server";

export default async function GET() {
  await dbConnect();
  try {
    const needs = await Need.find({});

    NextResponse.json(needs);
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}
