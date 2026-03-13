// O componente NovaTarefa é responsável por adicionar novas tarefas à lista. 
// Ele recebe as propriedades tarefas e setTarefas para poder atualizar o estado das tarefas no componente pai (App). 

export default function NovaTarefa({ tarefas, setTarefas }) {

  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input'); // Seleciona o input dentro do componente NovaTarefa para obter o valor digitado pelo usuário
    if(input.value === '') return; // Verifica se o input está vazio, se estiver, a função retorna sem fazer nada para evitar adicionar tarefas vazias
    const id = tarefas[tarefas.length-1].id + 1; // Gera um novo id para a tarefa com base no id da última tarefa na lista, incrementando-o em 1
    const novaTarefa = { id, titulo: input.value, completa: false }; // Cria um novo objeto de tarefa com o id gerado, o título obtido do input e a propriedade completa definida como false
    setTarefas([...tarefas, novaTarefa]); // Adiciona a nova tarefa à lista existente de tarefas usando o operador spread para criar um novo array
    input.value = ''; // Limpa o valor do input após adicionar a nova tarefa.
  }

  return (
    <div className='NovaTarefa'>
      <input type='text' placeholder='Digite uma nova tarefa' />
      <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
    </div>
  )
}