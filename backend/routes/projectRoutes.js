var express = require('express');
const { getProjectsWithPage, getProjectDetails, createProject, updateProject, deleteProject, addTechnologyToProject, removeTechFeatureFromProject } = require('../controllers/projectController');


var router = express.Router();

router.route('/projects').get(getProjectsWithPage)
router.route('/projects/:projectId').get(getProjectDetails)
router.route('/create-project').post(createProject)
router.route('/projects/:projectId/update').put(updateProject)
router.route('/projects/:projectId/delete').delete(deleteProject)

router.route('/projects/:projectId/add-technology').post(addTechnologyToProject);
router.route('/projects/:projectId/technologies/:techId/remove').delete(removeTechFeatureFromProject)
// router.delete('/:projectId/remove-tech-feature/:techId', projectController.removeTechFeatureFromProject);

module.exports = router;