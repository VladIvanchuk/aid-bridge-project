import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface INeed extends Document {
  _id: string;
  title: string;
  author: mongoose.Types.ObjectId;
  body: string;
  location: string;
  categories: string[];
  ImageURL: string;
  completed?: boolean;
  createdAt?: Date;
}

const needSchema = new Schema<INeed>({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  location: { type: String, required: true },
  categories: [{ type: String }],
  completed: { type: Boolean },
  ImageURL: { type: String },
  createdAt: { type: Date, default: Date.now },
});
needSchema.index({ title: "text" });

const Need: Model<INeed> =
  mongoose.models.Need || mongoose.model<INeed>("Need", needSchema);

export default Need;
