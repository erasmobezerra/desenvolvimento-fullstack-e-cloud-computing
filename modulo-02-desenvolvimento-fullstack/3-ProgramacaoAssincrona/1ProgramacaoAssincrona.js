/*
No modelo assíncrono, a função executa em um novo thread, sem o bloqueio do fluxo
principal, exigindo métodos de sincronização quando há dependência do resultado dessa
execução. 

Ao trabalhar com a linguagem JavaScript, usamos a palavra reservada async para
configurar uma função como assíncrona, além de sincronizarmos a execução com await e then.

O retorno de uma função assíncrona é sempre do tipo promise, logo, se uma função
comum tem como retorno um promise, ela se comporta da mesma forma que uma função
assinada com async. Ao configurar um retorno como promise, você não fornecerá o dado em
si, mas a possibilidade de existência do valor, em algum instante futuro, podendo ocorrer
uma exceção antes do retorno do valor.

Na listagem seguinte, podemos observar o uso de async na implementação da clássica
série de Fibonacci onde cada número é a soma dos dois anteriores, iniciando com 1 e 1.

Executando o código, teríamos a impressão dos valores da série, de forma decrescente,
para as posições 19 até 0. Como o uso de await é bloqueante, a ordem de execução é
respeitada, mesmo que a função fibo() seja assíncrona.
*/

import util from 'node:util';
const { promisify } = util;

const sleep = promisify(setTimeout);

const fibo = async (n) => {
    let x1 = 1, x2 = 1;
    for (let a = 2; a <= n; a++) {
        let c = x1 + x2;
        x1 = x2; x2 = c;
        await sleep(10);
    }
    return x2;
}

const imprimirComAwait = async () => {
    for (let i = 19; i >= 0; i--) {
        const f = await fibo(i);
        console.log(`Fibo(${i}) = ${f}`);
    }
}
console.log('--- Ordem Decrescente com await ---');
imprimirComAwait();

/*
Opcionalmente, você poderá capturar o retorno da função assíncrona através do operador
then. A diferença, em relação ao await, é que ele não bloqueia a execução, sendo possível
utilizar no fluxo síncrono, e exige uma função de callback para capturar o valor de retorno.
A função imprimir pode ser reescrita para uso de then, como é apresentado na
listagem seguinte.
*/

const imprimirComThen = () => {
    for (let i = 19; i >= 0; i--) {
        fibo(i).then((f) => console.log(`Fibo(${i}) = ${f}`));
    }
}
console.log('--- Ordem Crescente com then ---');
imprimirComThen();