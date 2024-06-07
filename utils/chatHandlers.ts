import dbConnect from "@/lib/mongodb";
import Message from "@/models/message";
import ChatRoom from "@/models/chatRoom";
import { NextRequest, NextResponse } from "next/server";

export async function getChatRoomsByParticipant(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  try {
    const { id } = params;
    const chatRooms = await ChatRoom.find({ participants: id });

    if (!chatRooms || chatRooms.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ data: chatRooms }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function getMessagesByChatRoom(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  try {
    const { id } = params;
    const data = await Message.find({ chatRoom: id }).sort({
      createdAt: -1,
    });

    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
