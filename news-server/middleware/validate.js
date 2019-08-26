const validator = require("validator");
const _ = require("lodash");
const { User } = require("../models/user");

validate = async (data, title) => {
  let errors = {};

  //check if data input defined
  // data.email = data.email ? data.email : "",
  data.email = _.get(data, "email", "");
  data.password = _.get(data, "password", "");
  data.password2 = _.get(data, "password2", "");
  data.username = _.get(data, "username", "");
  data.usertype = _.get(data, "usertype", "");

  //validate email
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  } else {
    const user = await User.findOne({ email: data.email });
    if (user && title) errors.email = "Email exists";
  }

  //validate password
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  } else if (!validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password has at least 6 character";
  } else if (!validator.isLength(data.password, { max: 15 })) {
    errors.password = "Password must be 15 character max";
  }

  if (title === "register") {
    // validate password 2
    if (validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password is required";
    } else if (!validator.equals(data.password, data.password2)) {
      errors.password2 = "Password is not match";
    }

    // validate username
    if (validator.isEmpty(data.username)) {
      errors.username = "Username is required";
    } else if (!validator.isLength(data.username, { min: 6 })) {
      errors.username = "Username has at least 6 character";
    } else if (!validator.isLength(data.username, { max: 15 })) {
      errors.username = "Username must be 15 character max";
    }

    // validate usertype
    if(validator.isEmpty(data.usertype)){
      errors.usertype = "Usertype is required"
    }
  }
  return {
    // isValid = true if errors={}, = false if errors
    isValid: _.isEmpty(errors),
    errors
  };
};
module.exports = validate;
