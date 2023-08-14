/*Os hooks são funções especiais do React que permitem que você utilize recursos de estado e ciclo de vida em componentes funcionais. Com os hooks, não é necessário utilizar classes para ter estado e efeitos em seus componentes.

useState
O hook useState permite adicionar estado a componentes funcionais. Vamos criar um contador usando o useState.*/
import React, { useState } from 'react'

function contador(){
const [count, setCount] = useState(0)
//define o valor inicial do contador
const add = () => {
  setCount(prevCount => prevCount + 1)
}//cria uma regra para acrescentar 1 a cada clique
const dec = () => {
  setCount(prevCount => prevCount - 1)
}//cria uma regra para decrementar 1 a cada clique

return (
  <div>
  <h1>contador: {count}</h1>
  <button onClick = {add}>Adicionar</button>
  <button onClick = {dec}>Diminuir</button>
  </div>
  )//cria os botões para Adicionar e decrementar o contador
}
export default contador
//exibi o contador na tela