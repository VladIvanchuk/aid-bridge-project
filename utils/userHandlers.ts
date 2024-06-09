import dbConnect from "@/lib/mongodb";
import { Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { authenticateToken } from "./authenticateToken";
import User from "@/models/user";

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

export async function getTopVolunteersHandler(req: NextRequest) {
  await dbConnect();

  try {
    const volunteers = await User.find({ "userProfile.role": "Волонтер" })
      .sort({ "userProfile.rating": -1 })
      .limit(20)
      .exec();

    if (!volunteers.length) {
      return NextResponse.json(
        { error: "No volunteers found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ volunteers }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function updateUserDataHandler(
  req: NextRequest,
  User: Model<any>,
) {
  await dbConnect();

  try {
    const userAuth = authenticateToken(req);
    if (!userAuth || !userAuth.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updatedData = await req.json();
    if (!updatedData) {
      return NextResponse.json({ error: "Invalid Data" }, { status: 400 });
    }

    const updateResult = await User.findOneAndUpdate(
      { _id: userAuth.userId },
      { $set: { userProfile: updatedData } },
      { new: true, runValidators: true },
    );

    if (!updateResult) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated", user: updateResult },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error updating user data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
