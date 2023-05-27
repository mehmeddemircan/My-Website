var express = require('express');
const { getTeamForms, sendTeamForm, getUserTeamForms, updateTeamForm, deleteTeamForm } = require('../controllers/teamFormController');


var router = express.Router();

router.route('/teamForms/submit').post(sendTeamForm)
router.route('/users/:userId/teamForms').get(getUserTeamForms)
router.route('/teamForms').get(getTeamForms)
router.route('/teamForms/:formId/update').put(updateTeamForm)
router.route('/teamForms/:formId/delete').delete(deleteTeamForm)

module.exports = router;