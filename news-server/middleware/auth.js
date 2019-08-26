const jwt = require("jsonwebtoken");

const authenticating = (req, res, next) => {
  // verify token
  const token = req.header("Authorization");
  const KEY = "TUYENTRAN";
  try {
    const decoded = jwt.verify(token, KEY);
    req.user = decoded;
    next(); // if success then return next()
  } catch (err) {
    res.status(403).json({ err: "Token khong hop le" });
  }
};

const authorizing = usertypeArray => {
  return (req, res, next) => {
    const { usertype } = req.user;
    // usertypeArray: list of user can access
    // usertype: current user ( get from decoded of token)
    // if usertypeArray has of usertype ==> next()
    if (usertypeArray.indexOf(usertype) > -1) {
        res.status(200).json({message:"You have full access to this router"})
        return next();
      
    } else {
      res
        .status(403)
        .json({ err: "You have logined, but dont have authorized to see" });
    }
  };
};

module.exports = {
  authenticating,
  authorizing
};
