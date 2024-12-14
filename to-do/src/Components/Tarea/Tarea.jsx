import React from 'react';

function Tarea({ tarea, eliminarTarea }) {
  return (
    <li className='tarea'>
      <label>{tarea}</label>
      {/* Botón para eliminar tarea */}
      <button className='button-delete' onClick={eliminarTarea}>Eliminar</button>
    </li>
  );
}

export default Tarea;
