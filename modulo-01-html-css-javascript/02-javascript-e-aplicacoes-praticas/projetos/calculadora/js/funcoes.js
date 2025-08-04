
function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    let resultado = 0;

    switch (operacao) {
        case '+': resultado = soma(num1, num2); break;
        case '-': resultado = subtrair(num1, num2); break;
        case '*': resultado = multiplicar(num1, num2); break;
        case '/': resultado = dividir(num1, num2); break;
        default:  console.error('Operação inválida');            
    }

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}

function subtrair(n1, n2) {
    return Number(n1) - Number(n2);
}

function multiplicar(n1, n2) {
    return Number(n1) * Number(n2);
}

function dividir(n1, n2) {
    if (n2 == 0) {
        console.error('Nao é possivel dividir por zero');
        return null;
    } else {
        return Number(n1) / Number(n2);
    }    
}