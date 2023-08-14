import React from 'react';
import React, { Component } from 'react';

function helloWorld(){
    return <h1>Hello, World!</h1>
}
export default helloWorld;
/*Os componentes são a base do React. Eles representam partes independentes da interface de usuário e podem ser reutilizados em diferentes partes da aplicação.

Existem dois tipos principais de componentes no React:

Componentes Funcionais: São funções JavaScript que retornam um elemento React (geralmente JSX).*/

class HelloWorld extends Component {
  render(){
    return <h1>Hello, World</h1>
  }
}
export default HelloWorld
/*Componentes Baseados em Classe: São classes JavaScript que estendem a classe React.Component e possuem um método render() que retorna um elemento React.*/