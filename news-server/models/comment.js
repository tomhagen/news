const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: { type: String },
  commentBody: { type: String, required: true },
  commentDate: { type: Date, default: Date.now() }
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = {
  Comment,
  CommentSchema
};
