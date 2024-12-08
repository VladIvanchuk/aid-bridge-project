import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IChatRoom extends Document {
  _id: string;
  participants: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const chatRoomSchema = new Schema<IChatRoom>({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
  createdAt: { type: Date, default: Date.now },
});

const ChatRoom: Model<IChatRoom> =
  mongoose.models.ChatRoom ||
  mongoose.model<IChatRoom>("ChatRoom", chatRoomSchema);

export default ChatRoom;
