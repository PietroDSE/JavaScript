import React from 'react';
function Tarefa({ texto, concluida, onClick }) {
  return (
    <div className={`tarefa ${concluida ? 'concluida' : ''}`} onClick={onClick}>
      {texto}
    </div>
  );
}

export default Tarefa;
