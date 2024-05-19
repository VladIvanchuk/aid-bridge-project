import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  color: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  color: { type: String, required: true },
});

const Category: Model<ICategory> =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default Category;
