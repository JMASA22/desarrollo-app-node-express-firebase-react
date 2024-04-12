/*
Aquest arxiu importa les funcions controlades de tasksControllers.js i defineix 
les rutes de la meva API REST per a les operacions CRUD sobre les taqsques utilitzant Express Router.

La lògica de l'API separada de la lògica de l'aplicació principal.

*/

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
router.put("/tasks/:id", updateTask);

//esborrar
router.delete("/tasks/:id", deleteTask);

module.exports = router;

/*
GET /tasks: Totes.
GET /tasks/:id: Específica per ID.
POST /tasks: Nova.
PUT /tasks/:id: Actualizar.
DELETE /tasks/:id: Esborrar.
*/