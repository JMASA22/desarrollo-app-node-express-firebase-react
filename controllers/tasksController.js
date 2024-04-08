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
        const taskRef = await db.collection('tasks').add({ title, description });
        res.status(201).json({ id: taskRef.id, title, description });
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        res.status(500).json({ message: error.message });
    }
};

// Esborrar
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('tasks').doc(id).delete();
        res.json({ message: "La task s'ha esborrar satisfactòriament" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
