import { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';

export default function App() {

  // O estado tarefas é um array de objetos, onde cada objeto representa uma tarefa com as propriedades id, titulo e completa.
  // tarefas -> estado que armazena a lista de tarefas
  // setTarefas -> função para atualizar o estado tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  // No componente NovaTarefa, passamos as propriedades tarefas e setTarefas para que ele possa adicionar novas tarefas à lista.
  // No componente ListaTarefas, passamos as propriedades titulo, tarefasFiltradas, tarefas e setTarefas para que ele possa exibir 
  // as tarefas filtradas e permitir a conclusão das tarefas.
  return (
    <div className="App">
      <Cabecalho />
      <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Pendentes:"
        tarefasFiltradas={tarefas.filter(t => !t.completa)} // Filtra as tarefas para exibir apenas as pendentes
        tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Concluídas:"
        tarefasFiltradas={tarefas.filter(t => t.completa)} // Filtra as tarefas para exibir apenas as concluídas
        tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}