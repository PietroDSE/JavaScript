// src/Greeting.js

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;

/*As props (propriedades) são utilizadas para passar dados de um componente pai para um componente filho. Isso permite que os componentes sejam mais flexíveis e reutilizáveis.

Por exemplo, vamos criar um componente Saudacao que receberá uma prop nome e exibirá uma saudação personalizada.*/