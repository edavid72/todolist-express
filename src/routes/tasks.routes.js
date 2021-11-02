const { Router } = require('express');
const {
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); //obtener la lista de tareas
router.get('/tasks/:id', getTaskCtrl); //obtener una tarea por su ID
router.post('/tasks', postTaskCtrl);
router.put('/tasks/:id', putTaskCtrl);
router.delete('/tasks/:id', deleteTaskCtrl);

module.exports = router;
