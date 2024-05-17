import mongoose, { Schema } from "mongoose";

const needSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  location: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  cratedAt: { type: Date, default: Date.now, required: true },
  hidden: Boolean,
});

const Need = mongoose.models.Need || mongoose.model("Need", needSchema);

export default Need;
