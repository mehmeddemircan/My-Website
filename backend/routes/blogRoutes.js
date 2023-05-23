var express = require('express');
const { getAllBlog, getBlogDetails, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');


var router = express.Router();

router.route('/blogs').get(getAllBlog)
router.route('/blogs/:blogId').get(getBlogDetails)
router.route('/create-blog').post(createBlog)
router.route('/blogs/:blogId/update').put(updateBlog)
router.route('/blogs/:blogId/delete').delete(deleteBlog)



module.exports = router;