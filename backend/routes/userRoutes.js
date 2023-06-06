var express = require("express");
const {

  getAllUser,
  deleteUser,
  getUserComments,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");

var router = express.Router();



router.route("/users").get(getAllUser);
router.route("/users/:userId/delete").delete(deleteUser);

router.route('/users/:userId/comments').get(getUserComments)

router.route("/profile/me").get(isAuthenticatedUser,getUserProfile);
router
  .route("/profile/update")
  .put(isAuthenticatedUser,updateUserProfile);

module.exports = router;
