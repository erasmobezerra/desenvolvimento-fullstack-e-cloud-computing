function alterarQuantidade(produto, acao) {

    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)
    const subtotal = document.getElementById('subtotal')

    if (qtd.innerHTML > 0 || acao == '+') {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valorTotal = somenteNumeros(valor.innerHTML) * qtd.innerHTML
        total.innerHTML = formatarValor(valorTotal)        
        soma()
    } else {
        alert('Atenção! A quantidade não pode ser menor que zero')
    }

}


// A soma é resultado da verificação dos valores dos produtos no momento e é feita a soma. 
// Utiliza as funções de validação abaixo
function soma() {
    let soma = 0;
    for (let i = 1; i < 4; i++) {
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        console.log(Number(numero))
        soma += Number(numero)
    }
    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}

// Minha Resolução: Remove caracteres indesejados e substituir a vírgula decimal pelo ponto.
function somenteNumeros(n) {
    return String(n)
        .replace(/[^\d,]/g, '') // Remove tudo que não seja números ou vírgula decimal
        .replace(',', '.'); // Substitui vírgula decimal por ponto
}


// Formatar um número como um valor monetário em reais (R$)
function formatarValor(n) {
    return 'R$ ' + n.toLocaleString('pt-BR')
}