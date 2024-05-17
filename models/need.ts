import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface INeed extends Document {
  title: string;
  author: string;
  body: string;
  location: string;
  comments: Array<{
    body: string;
    date: Date;
  }>;
  createdAt: Date;
}

const needSchema = new Schema<INeed>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  location: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  createdAt: { type: Date, default: Date.now, required: true },
});

const Need: Model<INeed> =
  mongoose.models.Need || mongoose.model<INeed>("Need", needSchema);

export default Need;
