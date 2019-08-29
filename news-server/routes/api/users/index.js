const express = require("express");
const router = express.Router();
const userController = require("./user");
const { authenticating, authorizing } = require("../../../middleware/auth");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/", userController.getAllUsers);

router.delete("/:id", userController.deleteUser);

router.get(
  "/test-private",
  authenticating,
  authorizing(["passenger", "admind"]),
  userController.testPrivate
);
// router.get("/:id", authenticating, userController.getUserById);

// router.delete("/delete", userController.deleteUser);

module.exports = router;
