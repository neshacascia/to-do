const express = require('express');
const router = express.Router();
const toDosController = require('../controllers/toDos');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, toDosController.getToDos);

router.post('/addToDo', toDosController.addToDo);

router.put('/markCompleted', toDosController.markCompleted);

router.put('/markIncomplete', toDosController.markIncompleted);

router.delete('/deleteToDo', toDosController.deleteToDo);

router.delete('/clearCompleted', toDosController.clearCompleted);

module.exports = router;
