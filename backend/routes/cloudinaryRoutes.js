var express = require('express');
const { upload, remove } = require('../controllers/cloudinaryController');


var router = express.Router();

// Routes
router.route('/uploadimages').post(upload)
router.route('/removeimage').post(remove)


module.exports = router;