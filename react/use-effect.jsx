/* hook useEffect permite que você realize efeitos colaterais em componentes funcionais, como chamadas à API, manipulação do DOM ou qualquer código que precise ser executado após renderizações. */
import React, { useState, useEffect } from 'react'

function data(){
  const [data, setData] = useState(new Date())
  //variavel1 = define a data, variavel2 = define a hora
  useEffect(() => {
    const interval = setInterval(() => {
      setData(new Date())
    }, 1000)
    //resgata a hora atual do dispositivo
    return () => {
      clearInterval(interval)
    }
  }, [])//tira qualquer tipo de delay no relógio
  return(
    <div>
    <h1>Data e hora atual: {data.toLocaleString()}</h1>
    </div>
    )//faz o esqueleto da exibição da data e hora
}
export default data
//exibi a hora e data atual