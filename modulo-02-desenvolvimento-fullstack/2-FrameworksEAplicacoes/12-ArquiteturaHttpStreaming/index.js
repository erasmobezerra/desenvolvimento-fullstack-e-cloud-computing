const http = require('http');
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

// A tecnologia de HTTP Streaming mantém uma conexão aberta para fluxo de dados
// contínuo, como no fornecimento de vídeo e conteúdos grandes. Dessa forma, existe uma
// manutenção de estados que não ocorreria em uma requisição HTTP comum, já que temos
// envio de dados sob demanda. Do lado do cliente, deve ser adotado um padrão Observer,
// onde um evento de recepção de dados é acionado sempre que ocorre a chegada de um novo
// bloco de informações, direcionando para a função de callback associada.

app.use(async (ctx) => {
    if (ctx.request.url === '/measurements.json') {
        ctx.response.set('content-type', 'application/json');
        ctx.body = fs.createReadStream('./measurements.json',
            { highWaterMark: 16 });
    }
});

http.createServer(app.callback()).listen(3000);