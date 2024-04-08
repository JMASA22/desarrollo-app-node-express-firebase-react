const express = require("express");
const router = express.Router();

// Importar controladors per operacions CRUD

const {
    getAllTasks, getTaskById, createTask, updateTask, deleteTask,
} = require("../controllers/tasksController");

//DEfinir rutes
//totes
router.get("/tasks", getAllTasks);

//per ID
router.get("/tasks/:id", getTaskById);

//nova
router.post("/tasks", createTask);

//actualizar
router.put("/task/:id", updateTask);

//esborrar
router.delete("/task/:id", deleteTask);

module.exports = router;

/*
GET /tasks: Totes.
GET /tasks/:id: Específica per ID.
POST /tasks: Nova.
PUT /tasks/:id: Actualizar.
DELETE /tasks/:id: Esborrar.
*/