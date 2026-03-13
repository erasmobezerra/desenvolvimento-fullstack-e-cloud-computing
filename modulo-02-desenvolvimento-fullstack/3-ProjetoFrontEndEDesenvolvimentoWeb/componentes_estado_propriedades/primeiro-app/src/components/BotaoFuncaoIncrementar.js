import { useState } from 'react'

// ** Componente de Botão Funcional com Incremento

// O componente BotaoFuncaoIncrementar é um componente funcional que utiliza o hook useState para gerenciar o estado do contador.
export default function BotaoFuncaoIncrementar() {
    // O hook useState é utilizado para criar uma variável de estado chamada "contador" e uma função "setContador" para atualizá-la.
    // O valor inicial do contador é definido como 0 ao declarar useState(0).
    const [contador, setContador] = useState(0);
    function incrementa() {
        setContador(contador + 1);
    }
    return (
        <button type='button' onClick={incrementa}>
            Cliques (Função): {contador}
        </button>
    )
}