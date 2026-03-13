import BotaoFuncao from './components/BotaoFuncao'
import BotaoClasse from './components/BotaoClasse'
import CabecalhoFuncao from './components/CabecalhoFuncao'
import CabecalhoClasse from './components/CabecalhoClasse'
import BotaoClasseIncrementar from './components/BotaoClasseIncrementar'
import BotaoFuncaoIncrementar from './components/BotaoFuncaoIncrementar'

// **COMPONENTES => São blocos de construção reutilizáveis que encapsulam a lógica e a interface de uma parte específica da aplicação.
// **PROPS => São propriedades passadas para os componentes, permitindo que eles sejam configurados e personalizados com dados dinâmicos.
// **STATE => É um objeto que representa o estado interno de um componente, permitindo que ele armazene e gerencie dados que podem mudar 
// **         ao longo do tempo, afetando a renderização do componente.


// ** Componente App com Vários Exemplos de Uso de Componentes
// Observa-se nos componentes BotaoFuncao e BotaoClasse que as propriedades "nome" com valores 
// "Botão Função" e "Botão Classe" são passadas como atributos na invocação dos componentes em JSX.

// Observa-se também que os componentes CabecalhoFuncao e CabecalhoClasse recebem elementos filhos (filhos 1 e 2) 
// que são passados como conteúdo entre as tags de abertura e fechamento dos componentes em JSX. Esses elementos 
// filhos podem ser acessados dentro dos componentes usando a propriedade especial "children" do objeto props, 
// permitindo que o conteúdo seja renderizado dinamicamente dentro do componente.

export default function App() {
  return <>
    <BotaoFuncao nome="Botão Função" />
    <BotaoClasse nome="Botão Classe" />
    <CabecalhoFuncao>
      <p>Parágrafo (Filho 1)</p>
      <p>Parágrafo (Filho 2)</p>
    </CabecalhoFuncao>
    <CabecalhoClasse>
      <p>Parágrafo (Filho 1)</p>
      <p>Parágrafo (Filho 2)</p>
    </CabecalhoClasse>

    <BotaoClasseIncrementar />    
    <BotaoFuncaoIncrementar />
  </>
}


// * Renderização Condicional com Blocos if/else
// export default function App() {
//   const tarefa = { id: "T1", descricao: "Tarefa 1", finalizada: true };
//   if (tarefa.finalizada) {
//     return <p>{tarefa.descricao + " ✔"}</p>;
//   } else {
//     return <p>{tarefa.descricao}</p>;
//   }
// }


// * Renderização com Operador de Condição Ternária em JSX
// export default function App() {
//   const tarefa = { id: "T1", descricao: "Tarefa 1", finalizada: true };
//   return <p>
//     {tarefa.finalizada
//       ? tarefa.descricao + " ✔"
//       : tarefa.descricao
//     }
//   </p>
// }

// * Renderização Condicional Retornando Nada com Null
// export default function App() {
//   const tarefa = { id: "T1", descricao: "Tarefa 1", finalizada: true };
//   return tarefa.finalizada ? null : <p>{tarefa.descricao}</p>;
// }

// * Renderização Condicional com Operador Lógico && (E)
// function App() {
//   const tarefa = { id: "T1", descricao: "Tarefa 1", finalizada: true };
//   return tarefa.finalizada && <p>{tarefa.descricao}</p>;
// }
// export default App;

// ** Renderização de Listas

// 1. Transformando Dados de Lista em Elementos HTML
// React exige que cada item da lista seja único, e, para isso, devemos
// atribuir à propriedade especial key um identificador único; 
// const tarefas = [
//   { id: "T1", descricao: "Tarefa 1", finalizada: true },
//   { id: "T2", descricao: "Tarefa 2", finalizada: true },
//   { id: "T3", descricao: "Tarefa 3", finalizada: false },
//   { id: "T4", descricao: "Tarefa 4", finalizada: true },
// ];
// export default function App() {
//   return <ul>
//     {
//       tarefas.map(tarefa =>
//         <li key={tarefa.id}>
//           {tarefa.descricao}
//         </li>
//       )}
//   </ul>;
// }

// 2. Opcionalmente, você também pode filtrar os dados antes de traduzi-los em elementos
// HTML. Considere, ainda, o mesmo cenário do exemplo anterior. Agora, desejamos criar dois
// tipos de listas: uma lista de tarefas pendentes, e outra lista de tarefas concluídas. Como
// solução, você pode desenvolver o seguinte código:
// const tarefas = [
//   { id: "T1", descricao: "Tarefa 1", finalizada: true },
//   { id: "T2", descricao: "Tarefa 2", finalizada: true },
//   { id: "T3", descricao: "Tarefa 3", finalizada: false },
//   { id: "T4", descricao: "Tarefa 4", finalizada: true },
// ];

// export default function App() {
//   const tarefasConcluidas = tarefas.filter(tarefa => tarefa.finalizada);
//   const tarefasPendentes = tarefas.filter(tarefa => !tarefa.finalizada);
//   return <>
//     <h1>Tarefas Pendentes:</h1>
//     <ul>{
//       tarefasPendentes
//         .map(tarefa => <li key={tarefa.id}>{tarefa.descricao}</li>)
//     }</ul>
//     <h1>Tarefas Concluídas:</h1>
//     <ul>{
//       tarefasConcluidas
//         .map(tarefa => <li key={tarefa.id}>{tarefa.descricao}</li>)
//     }</ul>
//   </>;
// }
