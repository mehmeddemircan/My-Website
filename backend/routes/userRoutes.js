var express = require("express");
const {
  login,
  register,
  getAllUser,
  deleteUser,
  getUserComments,
} = require("../controllers/userController");

var router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/users").get(getAllUser);
router.route("/users/:userId/delete").delete(deleteUser);

router.route('/users/:userId/comments').get(getUserComments)

module.exports = router;
