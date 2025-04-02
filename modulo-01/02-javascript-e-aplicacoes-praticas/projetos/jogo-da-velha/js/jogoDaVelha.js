let tabuleiro
let board
let aviso
let jogador
let linha
let coluna
let marcador


function iniciar() {
    tabuleiro = [];
    board = document.getElementById('board');
    aviso = document.getElementById('aviso');
    jogador = 1;    

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = [];
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0;
        }
    }

    console.table(tabuleiro);    
    exibir();
}

function exibir(){
    let tabela = '<table cellpadding="10" border="1">';

    for(let i = 0; i < 3; i++){
        tabela += '<tr>';

        for (let j = 0; j < 3; j++){

            switch (tabuleiro[i][j]) {
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_';
            }

            tabela += '<td>' + marcador + '</td>';
        }

        tabela += '</tr>';
    }

    tabela += '</table>';

    board.innerHTML = tabela;
}

function jogar(){    
    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador();
    linha = document.getElementById('linha').value - 1;
    coluna = document.getElementById('coluna').value - 1;

    if (tabuleiro[linha][coluna] == 0) {
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1;
    } 
    else {
        aviso.innerHTML = 'Este campo já foi marcado!';
    }
    console.table(tabuleiro);
    
    jogador += 1;  
    exibir();    
    checar();       
}

function checar(){
    // verificar linhas
    for(let i = 0; i < 3; i++){
        let soma = 0;
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
        if (soma == 3 || soma == -3) {
            aviso.innerHTML = 'Jogador ' + numeroJogador() + ' ganhou!';            
        }
    }

    // verificar colunas
    for(let i = 0; i < 3; i++){
        let soma = 0;
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];
        if (soma == 3 || soma == -3) {
            aviso.innerHTML = 'Jogador ' + numeroJogador() + ' ganhou!';
            return;
        }
    }

}

function numeroJogador(){
    return jogador%2 + 1;
}