import { useState } from 'react'

export default function BotaoFuncaoIncrementar() {
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