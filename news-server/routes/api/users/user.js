const { User } = require("../../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("../../../middleware/validate");

// route: POST/api/user/register
// register new user

const register = async (req, res, next) => {
  const { isValid, errors } = await validate(req.body, "register");
  if (!isValid) return res.status(400).json(errors);

  const { email, password, username, usertype } = req.body;

  const newUser = new User({
    email,
    password,
    username,
    usertype
  });

  bcrypt.genSalt(10, (err, salt) => {
    // console.log(salt);
    if (err) return Promise.reject(err);
    bcrypt.hash(password, salt, (err, hash) => {
      // console.log(hash);
      if (err) return Promise.reject(err);
      // console.log(newUser);
      newUser.password = hash;
      return newUser
        .save()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err));
    });
  });
};

//route POST/api/users/login
// login

const login = async (req, res, next) => {
  const { isValid, errors } = await validate(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) return Promise.reject({ errors: "User doesnot exists" });

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) return res.status(400).json({ errors: "Wrong password" });

        const payload = {
          email: user.email,
          password: user.password,
          usertype: user.usertype,
          username: user.username
        };
        const KEY = "TUYENTRAN";
        jwt.sign(payload, KEY, { expiresIn: "1h" }, (err, token) => {
          if (err) return res.status(400).json(err);
          return res.status(200).json({
            message: "login success",
            token
          });
        });
      });
    })
    .catch(err => res.status(400).json(err));
};

// test private
const testPrivate = (req, res, next) => {
  res.status(200).json({ message: "You have accessed the system" });
};

const getAllUsers = (req, res, next) => {
  User.find()
    .sort({ registerDate: -1 })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
};
// const getUserById = (req, res, next) => {
//   const { id } = req.user;
//   User.findById(id)
//     .then(user => res.status(200).json(user))
//     .catch(err => res.status(400).json(err));
// };

// const deleteUser = async (req, res, next) => {
//   const { id } = req.user;
//   await User.findByIdAndDelete(id, (err, res) => {
//     if (err) return res.status(400).json(err);
//     res.status(200).json({ message: "delete success", res });
//   });
// };

module.exports = {
  register,
  login,
  testPrivate,
  getAllUsers,
  deleteUser
  //   getUserById,
  //   deleteUser
};
