const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  status: { type: String, default: "public" },
  author: {type: String, required: true},
  description: { type: String, required: true },
  createdOn: { type: Date, default: Date.now() },
  category: { type: String, required: true },
  comments: { type: Schema.Types.ObjectId, ref: "comment" },
  images: {type: String, required: true}
});

const Post = mongoose.model("Post", PostSchema);
module.exports = {
  Post,
  PostSchema
};
