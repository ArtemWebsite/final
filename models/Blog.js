import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  metaTitle: String,
  metaDescription: String,
  imgUrl: String,
  description: String,
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
