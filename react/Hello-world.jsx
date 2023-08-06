import React from 'react';
import React, { Component } from 'react';

function helloWorld(){
    return <h1>Hello, World!</h1>
}
export default helloWorld;

//tem duas formas de usar react para imprimir essa msm msg

class HelloWorld extends Component {
  render(){
    return <h1>Hello, World</h1>
  }
}
export default HelloWorld
