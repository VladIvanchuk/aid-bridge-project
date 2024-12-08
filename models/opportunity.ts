import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOpportunity extends Document {
  _id: string;
  title: string;
  author: mongoose.Types.ObjectId;
  body: string;
  location: string;
  createdAt: Date;
}

const opportunitySchema = new Schema<IOpportunity>({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});
opportunitySchema.index({ title: "text" });

const Opportunity: Model<IOpportunity> =
  mongoose.models.Opportunity ||
  mongoose.model<IOpportunity>("Opportunity", opportunitySchema);

export default Opportunity;
