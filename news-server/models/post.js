const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  status: { type: String, default: "public" },
  description: { type: String, required: true },
  createdDate: { type: Date, default: Date.now() },
  category: { type: String, required: true },
  comments: { type: Schema.Types.ObjectId, ref: "comment" }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = {
  Post,
  PostSchema
};
