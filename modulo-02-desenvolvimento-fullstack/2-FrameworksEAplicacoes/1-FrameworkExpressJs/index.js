const express = require('express');
const app = express();
const port = 3000;

// Rota raiz, que responde ao método GET do HTTP, em que, na resposta, foi utilizado 
// o formato json, com a passagem de um objeto com a mensagem. 
app.get('/', (req, res) => {
    res.json({ mensagem: "Alo mundo" });
    res.end();
})

// Servidor ouvindo na porta definida 
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
})




// Exemplo sem Express vs com Express
// const app1 = http.createServer((req, res) => {
//     if (req.method === "GET" && req.url.startsWith("/produtos")) {
//         const codigo = req.url.substring(req.url.lastIndexOf('/') + 1);
//         obterProduto(codigo).then((p) => {
//             if (p) {
//                 res.statusCode = 200; res.end(JSON.stringify(p));
//             }
//         });
//     }
// })
// const app2 = express();
// app2.get('/produtos/:id', async (req, res) => {
//     res.json(await obterProduto(req.params.id)); res.end();
// });