var express = require('express');
const { getAllTemplate, createTemplate, updateTemplate, deleteTemplate } = require('../controllers/templateController');


var router = express.Router();

router.route('/create-template').post(createTemplate)
router.route('/templates').get(getAllTemplate)
router.route('/templates/:templateId/update').put(updateTemplate)
router.route('/templates/:templateId/delete').delete(deleteTemplate)

module.exports = router;