var express = require("express");
const {
  login,
  register,
  getAllUser,
  deleteUser,
} = require("../controllers/userController");

var router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/users").get(getAllUser);
router.route("/users/:userId/delete").delete(deleteUser);

module.exports = router;
