import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string; // 'volunteer' or 'beneficiary'
  location: string;
  needs: mongoose.Types.ObjectId[]; // Array of references to Need
  opportunities: mongoose.Types.ObjectId[]; // Array of references to Opportunity
  profilePhoto: string;
  rating: number;
  bio: string;
  createdAt: Date;
  reviews: Array<{
    reviewerId: string;
    author: mongoose.Types.ObjectId;
    text: string;
    rating: number;
    createdAt: Date;
  }>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String },
  role: { type: String, required: true, enum: ["volunteer", "beneficiary"] },
  needs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Need" }],
  opportunities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" }],
  profilePhoto: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  bio: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  reviews: [
    {
      reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      author: { type: String, required: true },
      text: { type: String, required: true },
      rating: { type: Number, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
