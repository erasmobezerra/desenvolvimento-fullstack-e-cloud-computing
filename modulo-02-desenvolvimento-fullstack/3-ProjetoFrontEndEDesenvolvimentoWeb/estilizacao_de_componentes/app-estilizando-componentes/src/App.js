import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styled from "styled-components";

// Styled Components
// É uma biblioteca que possibilita a escrita de CSS diretamente nos componentes React, 
// através da sintaxe de template literals do JavaScript. Isso permite a criação de estilos 
// personalizados para cada componente, eliminando preocupações com conflitos de nomeação,
// devido ao escopo local dos estilos.

// Criando um componente estilizado usando styled-components
const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`;

// Criando um componente estilizado com base em props
// O componente Button2 muda sua cor de fundo dependendo do valor da prop "primary"
const Button2 = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`;
// ===========================================================

// Criando um Componente React sem estilização
function Header2({ className, children }) {
  return (
    <h1 className={className}>
      {children}
    </h1>
  );
}
// ===========================================================

// Criando um componente estilizado a partir de um componente React
// O componente StyledHeader é criado a partir do componente Header, e recebe estilos adicionais
const StyledHeader = styled(Header)`
  color: #BF4F74;
  font-weight: bold;
`;

// Podemos criar um novo componente estilizado a partir de um componente estilizado existente
const NewHeader = styled(StyledHeader)

export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Button>
        Botão Estilizado
      </Button>
      <Button2 primary>
        Botão Primário
      </Button2>
      <Button2>
        Botão Secundário
      </Button2>
      <Header2>Unstyled Header</Header2> <br />
      <StyledHeader>Styled Header</StyledHeader>
    </div>
  );
}