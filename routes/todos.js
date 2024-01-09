const express = require("express");
const router = express.Router();

// import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTode");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//defins API routes

// post yane create 
router.post("/createTodo", createTodo);
// get yane lena
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
// put yane update karna
router.put("/updateTodo/:id", updateTodo);

// delete karna
router.delete("/deleteTodo/:id", deleteTodo)


module.exports = router;
