// src/App.js
import React, { useState } from 'react';
import './App.css';
import Tarefa from './Tarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  const marcarComoConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="controles">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <div className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            texto={tarefa.texto}
            concluida={tarefa.concluida}
            onClick={() => marcarComoConcluida(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
