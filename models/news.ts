import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface INews extends Document {
  title: string;
  author: mongoose.Types.ObjectId;
  body: string;
  ImageURL: string;
  createdAt?: Date;
}

const newsSchema = new Schema<INews>({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  ImageURL: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const News: Model<INews> =
  mongoose.models.News || mongoose.model<INews>("News", newsSchema);

export default News;
