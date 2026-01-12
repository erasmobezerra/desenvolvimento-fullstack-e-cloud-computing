
// *Componente de botão que utiliza uma função para o evento onClick
// export default function BotaoFuncao() {
//     return (
//         <button type='button' onClick={() => console.log('Clicou!')}>
//             Clique (Função)
//         </button>
//     )
// }


// *Acessando Props dos Componentes de Função
// A prop é um objeto que contém todas as propriedades passadas para o componente
// através de atributos na sua invocação em JSX. 
// A propriedade nome é passada pelo atributo nome na invocação do componente em App.js
export default function BotaoFuncao(props) {
    return (
        <button type='button'
            onClick={() =>
                console.log('Clicou em botão função!')}
        > {
                props.nome}
        </button>
    )
}