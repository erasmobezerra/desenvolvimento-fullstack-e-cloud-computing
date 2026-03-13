// ** Componente de Cabeçalho Funcional

// O componente CabecalhoFuncao é um componente funcional que recebe props como argumento.
// Ele retorna um elemento JSX que representa um cabeçalho (header) contendo um título (h1) 
// e os filhos (children) passados como conteúdo entre as tags de abertura e fechamento do componente em JSX.

// propos.children é uma propriedade especial do objeto props que contém os elementos filhos passados para o componente.
export default function CabecalhoFuncao(props) {
    return (
        <header>
            <h1>App React (Funcao)</h1>
            {props.children}
        </header>
    )
}