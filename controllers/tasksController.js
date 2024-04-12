/*

1- Este archivo contiene las funciones controladoras que gestionan las operaciones CRUD sobre las tareas.
2- Cada función controladora corresponde a una operación CRUD específica (getAllTasks, createTask, updateTask, deleteTask).
3- Utiliza el módulo firebase-admin para interactuar con Firebase Firestore y realizar operaciones de lectura, escritura y eliminación en la colección "tasks".
4- Gestiona los errores y devuelve respuestas JSON con mensajes de error en caso de que ocurran problemas durante la ejecución de las operaciones.

*/

const admin = require('firebase-admin');
const db = admin.firestore();
// snapshot es un objeto que contiene los resultados de una consulta a Firestore y te permite acceder a los documentos devueltos por esa consulta.

// Totes les tasques
exports.getAllTasks = async (req, res) => {
    try {
        // db.collection('tasks').get() - consulta para obtener todos los documentos de la colección 'tasks' en Firestore
        const snapshot = await db.collection('tasks').get();
        const tasks = [];

        // snapshot.forEach - para iterar sobre cada documento devuelto por la consulta. En cada iteración, doc representa un documento específico en el snapshot.
        snapshot.forEach(doc => {
            tasks.push({ id: doc.id, ...doc.data() }); // doc.data: para obtener un objeto que representa los datos del documento.
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Nova
exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validar datos de entrada
        if (!title || !description) {
            return res.status(400).json({ message: 'El título y la descripción son obligatorios.' });
        }

        // Crear la tarea en la base de datos
        const taskRef = await db.collection('tasks').add({ title, description });
        res.status(201).json({ id: taskRef.id, title, description });
    } catch (error) {
        console.error('Error creando la tarea:', error);

        // Devolver un código de estado 400 para errores de validación de datos
        if (error instanceof TypeError || error instanceof SyntaxError) {
            return res.status(400).json({ message: 'Datos de entrada incorrectos.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al crear la tarea.' });
    }
};

// Actualizar 
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await db.collection('tasks').doc(id).update({ title, description });
        res.json({ id, title, description });
    } catch (error) {
        console.error('Error actualizando tarea:', error);

        // Devolver un código de estado 400 para errores específicos
        if (error instanceof TypeError || error instanceof SyntaxError) {
            return res.status(400).json({ message: 'Datos de entrada incorrectos.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al actualizar la tarea.' });
    }
};

// Eliminar
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('tasks').doc(id).delete();
        res.json({ message: "La tarea se ha borrado satisfactoriamente" });
    } catch (error) {
        console.error('Error borrando tarea:', error);

        // Devolver un código de estado 404 si la tarea no se encuentra
        if (error.code === 5) {
            return res.status(404).json({ message: 'La tarea no se encuentra.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al borrar la tarea.' });
    }
};

/*

Se devuelve un código de estado 400 para errores de validación de datos,
como cuando el título o la descripción faltan en la solicitud.

TMb hay una verificación para errores de tipo específico (TypeError y SyntaxError),
que podrían ocurrir si hay problemas con los datos de entrada. 

Para otros errores que no son controlados explícitamente, se devuelve un código de estado 500.
Esto asegura que sólo se devuelvan códigos de 500 para errores ciertamente imprevistos.

*/
