const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getIndex);

router.post('/addToDo', homeController.addToDo);

router.put('/markCompleted', homeController.markCompleted);

router.put('/markIncomplete', homeController.markIncomplete);

router.delete('/deleteToDo', homeController.deleteToDo);

router.delete('/clearCompleted', homeController.clearCompleted);

module.exports = router;
