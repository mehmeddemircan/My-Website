var express = require("express");
const {

  getAllUser,
  deleteUser,
  getUserComments,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

var router = express.Router();



router.route("/users").get(getAllUser);
router.route("/users/:userId/delete").delete(deleteUser);

router.route('/users/:userId/comments').get(getUserComments)

router.route("/profile/me").get(getUserProfile);
router
  .route("/profile/update")
  .put(updateUserProfile);

module.exports = router;
