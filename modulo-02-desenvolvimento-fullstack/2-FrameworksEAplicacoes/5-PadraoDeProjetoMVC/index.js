const express = require('express')
const bodyParser = require('body-parser')
const rotaNotas = require('./routes/rota-notas.js')
const app = express();

app.use(bodyParser.json());

app.use('/notas', rotaNotas);

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada. Inclua uma rota válida na URL.');
    res.status(404).json({
        mensagem: 'Ops! Essa rota não existe.',
        path: req.originalUrl
    });
});

app.listen(3000, () => console.log("Servidor pronto"));