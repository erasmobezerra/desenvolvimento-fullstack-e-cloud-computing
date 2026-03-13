import Tarefa from "./Tarefa";

// O componente ListaTarefas é responsável por exibir a lista de tarefas, tanto as pendentes quanto as concluídas.
// Recebe as propriedades titulo, tarefasFiltradas, tarefas e setTarefas para exibir as tarefas filtradas e permitir a conclusão das tarefas.
// ...props -> operador rest para coletar as propriedades restantes (tarefas e setTarefas) e passá-las para o componente Tarefa.
export default function ListaTarefas({ titulo, tarefasFiltradas, ...props }) {
  return (
    <div className='ListaTarefas'>
      <h2>{titulo}</h2>
      {tarefasFiltradas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} {...props} />
      ))}
    </div>
  )
}