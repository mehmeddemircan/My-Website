var express = require('express');
const { sendProjectIdeaForm, getUserProjectIdeaForms, getAllProjectIdeaForm, updateProjectIdeaForm, deleteProjectIdeaForm } = require('../controllers/projectIdeaFormController');


var router = express.Router();

router.route('/projectIdeaForms/submit').post(sendProjectIdeaForm)
router.route('/users/:userId/projectIdeaForms').get(getUserProjectIdeaForms)
router.route('/projectIdeaForms').get(getAllProjectIdeaForm)
router.route('/projectIdeaForms/:formId/update').put(updateProjectIdeaForm)
router.route('/projectIdeaForms/:formId/delete').delete(deleteProjectIdeaForm)

module.exports = router;