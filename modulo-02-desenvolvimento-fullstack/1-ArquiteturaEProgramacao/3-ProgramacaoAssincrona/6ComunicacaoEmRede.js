// A biblioteca http permite criar tanto servidores quanto requisições, utilizando elementos
// assíncronos em ambos os lados. Note que não falamos de cliente, mas de requisição, pois a
// comunicação envolve apenas uma chamada e uma resposta, e não uma conexão duradoura.
// A implementação de um servidor HTTP pode ser observada a seguir.

import $http from 'node:http';

const server = $http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá Mundo!');
})

server.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
});


// Ao nível do aplicativo cliente, você precisa criar uma requisição, através do método
// request de http, informando o endereço, a porta e o método HTTP que será utilizado.

// Também é necessário definir o tratamento da resposta(res), e, aqui, é associado o evento
// data, que ocorre na recepção de dados, a uma função de callback para impressão no console.

const req = $http.request(
    { hostname: 'localhost', port: 3000, method: 'GET' },
    (res) => {
        res.on('data', (d) => { console.log(d.toString()); });
    });
req.end();