var express = require('express');
const { getAllTechFeature, createTechFeature, updateTechFeature, deleteTechFeature } = require('../controllers/techFeatureController');


var router = express.Router();

router.route('/technologies').get(getAllTechFeature)
router.route('/create-technology').post(createTechFeature)
router.route('/technologies/:techId/update').put(updateTechFeature)
router.route('/technologies/:techId/delete').delete(deleteTechFeature)

module.exports = router;