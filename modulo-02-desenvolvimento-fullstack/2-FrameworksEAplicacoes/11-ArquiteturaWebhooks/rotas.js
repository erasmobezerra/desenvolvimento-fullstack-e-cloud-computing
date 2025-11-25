const express = require('express')
const webhooks = require('node-webhooks')
const routes = express.Router();
const dados = [1, 2, 3];

routes.get("/", (req, res) => { res.json({ valores: dados }); })

//  A função registerHooks, onde é instanciado um objeto
// webhooks, tem como parâmetro o conjunto de endereços que será acionado de forma
// automática. A resposta para a rota raiz, via método POST, irá adicionar o novo valor no
// repositório, que no caso é apenas um vetor, registrar os hooks, disparar para os endereços
// definidos, com um objeto JSON na nova requisição, e retornar o vetor completo para o cliente.

routes.post("/", (req, res) => {
    dados.push(req.body.valor);
    const hooks = registerHooks();
    hooks.trigger('callback_hook',
        { msg: "novo valor", data: req.body.valor });
    res.json({ valores: dados });
})

const registerHooks = () => {
    return new webhooks({
        db: {
            'callback_hook':
                ['http://localhost:8005/webhook-client']
        }
    });
}

module.exports = routes