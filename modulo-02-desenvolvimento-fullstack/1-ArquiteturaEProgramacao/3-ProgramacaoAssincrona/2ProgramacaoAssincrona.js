// Outra forma de escrever uma função assíncrona é através de um retorno do tipo promise,
// como no exemplo seguinte:

const dividir = (a, b) => {
    const promise = new Promise((resolve, reject) => {
        if (b == 0) { reject("Divisao por zero"); }
        else { resolve(a / b); }
    });
    return promise;
}

// Ou se quiser gerar a exceção em uma função marcada como async, você
// precisará lançá-la através de uma cláusula throw.
const dividir2 = async (a, b) => {
    if (b == 0)
        throw ("Divisao por zero");
    return a / b;
}

// Ao definir um retorno do tipo promise, o elemento resolve retorna com o valor da
// operação para o chamador, enquanto reject causa uma exceção. A captura da exceção
// ocorreria via operador catch em uma chamada com then.

for (let i = 2; i >= -2; i--) {
    dividir(10, i).then((x) => console.log(x))
        .catch((error) => console.log(error));
}

// Se quiser chamar a função de divisão, a partir de uma função marcada como async, você
// precisará utilizar await, tratando a ocorrência de exceção em um bloco com try e catch.

const exec = async () => {
    for (let i = 2; i >= -2; i--)
        try {
            console.log(await dividir(10, i));
        } catch (error) {
            console.log(error);
        }
}

