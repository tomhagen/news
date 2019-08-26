const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  usertype: {type: String, required: true},
  registerDate: { type: Date, default: new Date() },
  avatar: { type: String }
});
const User = mongoose.model("User", UserSchema);
module.exports = {
  User,
  UserSchema
};
