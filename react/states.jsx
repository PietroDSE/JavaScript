import React, { Component } from 'react';
/*O estado é uma das características mais poderosas do React. Ele permite que os componentes controlem dados mutáveis e atualizem a interface de acordo com as mudanças.

Para utilizar o estado, precisamos de componentes baseados em classe. O estado é inicializado no construtor do componente e pode ser atualizado usando o método setState().
*/ 
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementar = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementar = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

export default Contador;
/*Neste exemplo, o componente Contador possui um estado count que é inicializado com o valor 0. Ao clicar nos botões "Incrementar" e "Decrementar", o estado é atualizado e a interface é re-renderizada.*/
