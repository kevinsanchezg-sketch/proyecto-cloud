const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.send("Tarea agregada");
});

app.delete('/tasks/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.send("Tarea eliminada");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor corriendo');
});