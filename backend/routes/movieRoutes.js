var express = require('express');
const { getMoviesWithPagination, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');


var router = express.Router();

router.route('/create-movie').post(createMovie)
router.route('/movies').get(getMoviesWithPagination)
router.route('/movies/:movieId/update').put(updateMovie)
router.route('/movies/:movieId/delete').delete(deleteMovie)

module.exports = router;