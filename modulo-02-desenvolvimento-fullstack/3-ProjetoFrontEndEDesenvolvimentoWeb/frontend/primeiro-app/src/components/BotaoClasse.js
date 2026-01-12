import { Component } from 'react';

// *Componente de Classe que utiliza uma classe para o evento onClick
// export default class BotaoClasse extends Component {
//   render() {
//     return (
//       <button type='button' onClick={() => console.log('Clicou!')}>
//         Clique (Classe)
//       </button>
//     )
//   }
// }

// *Acessando Props dos Componentes de Classe
// A prop é um objeto que contém todas as propriedades passadas para o componente
// através de atributos na sua invocação em JSX. 
// A propriedade nome é passada pelo atributo nome na invocação do componente em App.js
export default class BotaoClasse extends Component {
  render() {
    return (
      <button type='button'
        onClick={() =>
          console.log('Clicou em botão classe!')}
      >
        {this.props.nome}
      </button>
    )
  }
}