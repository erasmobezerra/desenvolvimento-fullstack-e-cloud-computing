// Eventos e Tratamento Assíncrono
// Uma peça fundamental na arquitetura do NodeJS é o event loop, e não é à toa que
// muitos processos assíncronos são iniciados por eventos. Um evento data sempre está
// relacionado à recepção de dados, enquanto end estabelece o término de uma comunicação,
// diferentemente de close, que indica o fechamento de uma conexão ou outro recurso.

// No exemplo apresentado, criamos um fluxo(stream) de leitura, configurado para iniciar
// na posição 5 do arquivo e ler até a posição 200, em blocos contendo 10 caracteres.Através
// do evento data, cada fragmento(chunk) lido é impresso no console, como na figura seguinte.
// Ao final da leitura, o evento end é disparado, executando a função de callback que
// informa que a leitura foi finalizada.

import $fs from 'fs';

const reader = $fs.createReadStream('../../log.txt', {
    flag: 'r', encoding: 'UTF-8',
    start: 5, end: 200, highWaterMark: 10
});
reader.on('data', (chunk) => { console.log(chunk); });
reader.on('end', () => { console.log('Leitura finalizada.'); });


// Agora, observe o servidor definido no fragmento de código seguinte.
// Note que precisamos do evento data, para apresentar as letras recebidas no console,
// do evento end, indicando o fim da comunicação, e do evento close, que ocorrerá com o
// término da conexão.

import $http from 'node:http';

const server = $http.createServer((req, res) => {    
    res.write("A");
    res.write("B");
    res.end("C");
}).on("close", () => console.log("Servidor encerrado"));

server.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
});

// Uma requisição para o servidor seria definida como no código seguinte.
const req = $http.request(
    { hostname: 'localhost', port: 3000, method: 'GET' },  
    (res) => {
        res.on('data', (d) => console.log("Resp: "+d.toString()));
        res.on('end', () => console.log("Fim da comunicação"));
        res.on('close', () => console.log("Conexão encerrada"));
    });
req.end();