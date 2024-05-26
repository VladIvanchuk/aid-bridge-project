import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  userProfile: {
    username: string;
    role: string; // 'volunteer' or 'beneficiary'
    location: string;
    needs: mongoose.Types.ObjectId[]; // Array of references to Need
    opportunities: mongoose.Types.ObjectId[]; // Array of references to Opportunity
    profilePhoto: string;
    rating: number;
    bio: string;
    createdAt: Date;
    reviews: mongoose.Types.ObjectId[];
  };
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userProfile: {
    username: { type: String, default: "" },
    location: { type: String, default: "" },
    role: { type: String, enum: ["volunteer", "beneficiary"] },
    needs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Need" }],
    opportunities: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" },
    ],
    profilePhoto: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    bio: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
});

const User: Model<IUser> =
  mongoose.models.UserProfile ||
  mongoose.model<IUser>("UserProfile", userSchema);

export default User;
