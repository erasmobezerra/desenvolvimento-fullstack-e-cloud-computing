/*
TRATAMENTO ASSINCRONA DE ARQUIVOS

Toda operação de leitura ou escrita em dispositivos é demorada, quando a comparamos
com as operações de execução direta no processador, e por isso ocorre a divisão entre
instruções I/O Bound e CPU Bound. Se o processador tiver de aguardar a finalização de
uma operação de leitura ou escrita, ele ficará com grande ociosidade, ao compararmos sua
velocidade com a dos dispositivos.

Para minimizar esse tempo ocioso, as operações de I/O são realizadas de forma
assíncrona, onde a requisição de leitura ou escrita é feita, e o processador pode
continuar executando outras instruções, retornando à operação de I/O quando ela for
finalizada. Esse modelo é amplamente utilizado em sistemas operacionais modernos,
permitindo o melhor aproveitamento do processador.

*/

// O método appendFile utiliza o nome do arquivo, o conteúdo que será escrito, a codificação
// e uma callback que recebe o código do erro, caso este ocorra. Esse método irá adicionar
// informação ao arquivo, de forma assíncrona, além de criar o arquivo quando necessário.
// Caso você precise escrever diversas linhas no arquivo, será melhor mantê-lo aberto e
// fechar apenas após a última linha. Nesse contexto, devemos utilizar um descritor de arquivo,
// com os métodos open e close.

import { open, close, appendFile } from 'fs';

const closeArq = (fd) => {
    close(fd, (err) => { if (err) throw err; });
}

open('log.txt', 'a', (err, fd) => {
    if (err) throw err;
    console.log('Log escrito com sucesso.');
    appendFile(fd, `Escrito X em ${new Date()}\n`, 'utf8',
        (err) => { closeArq(fd); if (err) throw err; });
});


import $fs from 'fs/promises';

async function teste_leitura() {
    try {
        const data = await $fs.readFile(
            'log.txt', { encoding: 'utf8' });
        console.log('Conteúdo do log:');
        console.log(data);
    } catch (err) { console.log(err); }
}
teste_leitura();
