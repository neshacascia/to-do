const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ToDo', ToDoSchema);
