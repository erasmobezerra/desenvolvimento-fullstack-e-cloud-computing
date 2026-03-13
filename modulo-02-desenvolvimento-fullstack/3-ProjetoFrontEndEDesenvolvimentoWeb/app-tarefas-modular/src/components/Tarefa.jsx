
// O componente Tarefa é responsável por exibir uma única tarefa e permitir sua conclusão.
// Recebe as propriedades tarefa, tarefas e setTarefas para exibir as informações da tarefa e atualizar seu estado.
export default function Tarefa({ tarefa, tarefas, setTarefas }) {

  function concluirTarefa(tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefa.id); // Encontra o índice da tarefa na lista de tarefas usando o método findIndex
    tarefas[index].completa = true; // Atualiza a propriedade completa da tarefa para true, indicando que a tarefa foi concluída
    setTarefas([...tarefas]); // Atualiza o estado das tarefas com a lista modificada
  }

  // Aplica um estilo de texto riscado (line-through) ao título da tarefa se ela estiver marcada como completa caso contrário, exibe o título normalmente.
  // Exibe o botão "Tarefa concluída?" apenas se a tarefa não estiver marcada como completa, permitindo que o usuário conclua a tarefa. 
  return (
    <div key={tarefa.id} className='Tarefa'>      
      <span style={{ textDecoration: tarefa.completa && 'line-through' }}>  
        {tarefa.titulo}
      </span>      
      {!tarefa.completa && <button type='button' onClick={() => concluirTarefa(tarefa)}>
        Tarefa concluída?
      </button>}
    </div>
  )
}