const express = require("express")
const router = express.Router()
const Todo = require("../models/todo.js")
const { createToDo, getToDo, updateToDo, removeToDo } = require("../controllers/todoController.js");
//posting the data
router.post('/todos', createToDo);
//fetching the data
router.get('/todos', getToDo);
//updating the data
router.put('/todos/:id', updateToDo);
//deleting the task
router.delete('/todos/:id', removeToDo)

module.exports = router;
