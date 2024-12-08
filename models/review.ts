import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IReview extends Document {
  _id: string;
  author: mongoose.Types.ObjectId;
  target: mongoose.Types.ObjectId;
  text: string;
  rating: number;
  createdAt: Date;
}

const reviewSchema = new Schema<IReview>({
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  target: { type: mongoose.Schema.Types.ObjectId, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
