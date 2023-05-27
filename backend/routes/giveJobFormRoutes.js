var express = require('express');
const { sendGiveJobForm, getGiveJobForms, updateGiveJobForm, deleteGiveJobForm, getUserGiveJobForms } = require('../controllers/giveJobFormController');


var router = express.Router();

router.route('/giveJobForms/submit').post(sendGiveJobForm)
router.route('/users/:userId/giveJobForms').get(getUserGiveJobForms)
router.route('/giveJobForms').get(getGiveJobForms)
router.route('/giveJobForms/:formId/update').put(updateGiveJobForm)
router.route('/giveJobForms/:formId/delete').delete(deleteGiveJobForm)

module.exports = router;