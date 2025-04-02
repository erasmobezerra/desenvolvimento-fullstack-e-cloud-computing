function alterarQuantidade(produto, acao) {

    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)
    const subtotal = document.getElementById('subtotal')

    if (qtd.innerHTML > 0 || acao == '+') {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = valor.innerHTML * qtd.innerHTML
        calcularSubtotal(valor, subtotal, acao)
    } else {
        alert('Atenção! A quantidade não pode ser menor que zero')
    }

}

// A soma é resultado da adição ou subtração de cada valor 
function calcularSubtotal(valor, subtotal, acao) {
    let soma = Number(subtotal.innerHTML)
    if (acao == '+') {
        soma += Number(valor.innerHTML)
        subtotal.innerHTML = soma.toFixed(2)
    }
    else {
        soma -= Number(valor.innerHTML)
        subtotal.innerHTML = soma.toFixed(2)
    }
}

// Resolução do Professor: 
// A soma é resultado da verificação dos valores dos produtos no momento e é feita a soma. 
// function calcularSubtotal() {
//     let soma = 0;
//     for (let i = 0; i < 4; i++) {
//         soma += Number(document.getElementById('total_' + i).innerHTML)
//     }
//     document.getElementById('subtotal').innerHTML = soma
// }

// Mantém números e pontos decimais
function somenteNumeros(n) {
    return String(n).replace(/[^0-9.]/g, '');
}



// Formatar um número como um valor monetário em reais (R$)
function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}





