var express = require('express');
const { getAllComment, getCommentReplies, deleteComment, createComment, updateComment } = require('../controllers/commentController');
const { isAuthenticatedUser } = require('../middlewares/auth');


var router = express.Router();

router.route('/projects/:projectId/comments').get(getAllComment)
router.route('/comments/:commentId/replies').get(getCommentReplies)

// kullanici griiş yapmadan calismayacak routerlar
router.route('/create-comment').post(createComment)
router.route('/comments/:commentId/update').put(updateComment)
router.route('/comments/:commentId/delete').post(deleteComment)

module.exports = router;