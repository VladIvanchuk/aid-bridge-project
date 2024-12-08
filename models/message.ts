import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IMessage extends Document {
  _id: string;
  chatRoom: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  chatRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

export default Message;
