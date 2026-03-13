import { Component } from 'react';

// ** Componente de Botão de Classe com Incremento
// O componente BotaoClasseIncrementar é um componente de classe que estende a classe Component do React.
// Ele possui um construtor que inicializa o estado do contador como 0 e um método incrementa que atualiza o estado do contador quando o botão é clicado.
export default class BotaoClasseIncrementar extends Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
    }
    incrementa = () => {
        this.setState({ contador: this.state.contador + 1 });
    }
    render() {
        return (
            <button onClick={this.incrementa}>
                Cliques (Classe): {this.state.contador}
            </button>
        );
    }
}