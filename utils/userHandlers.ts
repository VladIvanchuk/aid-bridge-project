import dbConnect from "@/lib/mongodb";
import { Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { authenticateToken } from "./authenticateToken";

export async function getUserDataHandler(req: NextRequest, User: Model<any>) {
  await dbConnect();

  try {
    const userAuth = authenticateToken(req);
    if (!userAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userAuth.userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
