var express = require('express');
const { createBook, getBooksWithPagination, updateBook, deleteBook } = require('../controllers/bookController');


var router = express.Router();


router.route('/create-book').post(createBook)
router.route('/books').get(getBooksWithPagination)
router.route('/books/:bookId/update').put(updateBook)
router.route('/books/:bookId/delete').delete(deleteBook)

module.exports = router;