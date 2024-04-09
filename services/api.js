const express = require('express');
const router = express.Router();

router.get('/tasks', async (req, res) => {
    try {
        const snapshot = await db.collection('tasks').get();
        const tasks = [];
        snapshot.forEach(doc => {
            tasks.push({ id: doc.id, ...doc.data() });
        });
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});

router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const taskRef = await db.collection('tasks').add({ title, description });
        res.status(201).json({ id: taskRef.id, title, description });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Error creating task' });
    }
});

router.put('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await db.collection('tasks').doc(id).update({ title, description });
        res.json({ id, title, description });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Error updating task' });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('tasks').doc(id).delete();
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Error deleting task' });
    }
});

module.exports = router;
