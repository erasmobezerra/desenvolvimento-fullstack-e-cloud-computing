// Para a definição de aplicativos web, iremos utilizar a biblioteca http, mas, para comunicações de baixo nível, envolvendo
// a especificação de protocolos e o uso de sockets, adotaremos a biblioteca net.

// Observando o código abaixo, você verá que a criação do socket servidor ocorre através de
// createServer, o qual utiliza uma callback que tem como parâmetro o socket gerado pelo
// servidor para se comunicar com o socket do cliente. Por se tratar de um protocolo muito
// simples, o socket do lado servidor apenas emite a mensagem, com a hora corrente, para o
// socket cliente, terminando a comunicação em seguida, através do método end.

// No caso de erro ao iniciar o servidor, o que pode ocorrer pelo uso de uma porta já ocupada
// por outro serviço, ocorrerá o evento error, que irá executar uma callback para recepção e
// tratamento do erro. Aqui, nós apenas ecoamos o erro para a plataforma através de uma instrução throw

import net from 'node:net';

const server = net.createServer((socket) => {
    socket.end(`Hora no servidor: ${new Date()}\n`);
}).on('error', (err) => {
    console.error('Erro no servidor:', err);
    throw err;
});
server.listen(1234, () => {
    console.log('Servidor ouvindo na porta 1234');
});


// Agora, precisamos definir o lado cliente, conforme o código seguinte, em que são criadas
// cinco conexões com o servidor anterior.

// Cada conexão é criada através do método createConnection, que recebe como parâmetros a
// porta e o endereço do servidor. 

// O retorno desse método é o socket cliente, que é utilizado para definir os eventos data e end. 
// No evento data, recebemos os dados enviados pelo servidor, que são exibidos no console. 
// No evento end, encerramos a conexão do lado cliente com o método destroy e exibimos uma mensagem indicando que a conexão foi encerrada.

for (let i = 1; i <= 5; i++) {

    const client = net.createConnection(1234, "localhost");

    client.on('data', (dados) => {
        console.log(`--- Conexão ${i} ---`);
        console.log(dados.toString()); // classe Buffer
    })
        .on('end', () => {
            client.destroy();
            console.log(`Conexão ${i} encerrada pelo cliente.`);
        });
}

// Note que, como o Node.js é assíncrono, as conexões podem ser atendidas em qualquer ordem,
// dependendo do tempo de resposta do servidor e da ordem de chegada dos pacotes.


