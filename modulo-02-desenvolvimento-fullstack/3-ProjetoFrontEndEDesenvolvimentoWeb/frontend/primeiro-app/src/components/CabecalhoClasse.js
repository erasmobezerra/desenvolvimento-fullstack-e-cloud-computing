import { Component } from 'react';
export default class CabecalhoClasse extends Component {
    render() {
        return (
            <header>
                <h1>App React (Classe)</h1>
                {this.props.children}
            </header>
        )
    }
}