const express = require('express');
const app = express();
// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

let tarefas = [];
// Rota para obter todas as tarefas
app.get('/api/tarefas', (req, res) => {
    res.json(tarefas);
    res.end();
})
// Rota para adicionar uma nova tarefa
app.post('/api/tarefas', (req, res) => {
    tarefas.push({ tarefa: req.body.tarefa });
    res.end();
})
// Servidor ouvindo na porta 3000
app.listen(3000);