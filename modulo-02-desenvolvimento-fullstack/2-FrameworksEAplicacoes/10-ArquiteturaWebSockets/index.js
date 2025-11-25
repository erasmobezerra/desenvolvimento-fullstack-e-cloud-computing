const WebSocket = require('ws');
const express = require('express');
const app = express()
const onMessage = (ws, d) => { ws.send(`recebido! ${d}`); }

const onConnection = (ws, req) => {
    ws.on('message', data => onMessage(ws, data));
    console.log(`onConnection`);
}

const server = app.listen(3000, () => console.log('executando'));

const wss = new WebSocket.Server({ server });
wss.on('connection', onConnection);

// Observe como o WebSocket encapsula o servidor Express e direciona a conexão para
// a função onConnection. Com a execução da função, o evento message é associado a uma
// callback, onde os dados recebidos são retornados para o cliente, via send, precedidos da
// palavra recebido.