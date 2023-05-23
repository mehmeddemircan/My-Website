var express = require('express');
const { getProjectsWithPage, getProjectDetails, createProject, updateProject, deleteProject, addTechnologyToProject, removeTechFeatureFromProject, getFutureProjects } = require('../controllers/projectController');


var router = express.Router();

router.route('/projects').get(getProjectsWithPage)
router.route('/projects/:projectId').get(getProjectDetails)
router.route('/create-project').post(createProject)
router.route('/projects/:projectId/update').put(updateProject)
router.route('/projects/:projectId/delete').delete(deleteProject)

router.route('/future/projects').get(getFutureProjects)

module.exports = router;