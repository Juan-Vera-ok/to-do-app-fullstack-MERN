import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar Axios
import Tarea from './Components/Tarea/Tarea';

function App() {
  // Estado para las tareas
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState(''); // Estado para el input de tarea

  const API_URL = 'http://localhost:5000/api/tareas'; // URL del backend

  // Obtener tareas al cargar el componente
  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get(API_URL);
        setTareas(response.data); // Asignar las tareas al estado
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };

    fetchTareas();
  }, []);

  // Función para agregar tarea
  const agregarTarea = async () => {
    if (tarea !== '') {
      try {
        const response = await axios.post(API_URL, { descripcion: tarea });
        setTareas([...tareas, response.data]); // Agregar la nueva tarea al estado
        setTarea(''); // Limpiar el input
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    }
  };

  // Función para eliminar tarea
  const eliminarTarea = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTareas(tareas.filter((t) => t._id !== id)); // Actualizar la lista de tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      {/* Input para agregar tarea */}
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      {/* Botón para agregar tarea */}
      <button className="button-input" onClick={agregarTarea}>
        Agregar
      </button>

      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea._id}
            tarea={tarea.descripcion}
            eliminarTarea={() => eliminarTarea(tarea._id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
