// backend/controllers/tareaController.js
import Tarea from '../models/tarea.js';

// Obtener todas las tareas
const getTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas', error });
  }
};

// Agregar una nueva tarea
const agregarTarea = async (req, res) => {
  try {
    const { descripcion } = req.body;

    if (!descripcion) {
      return res.status(400).json({ message: 'La descripción de la tarea es obligatoria' });
    }

    const nuevaTarea = new Tarea({ descripcion });
    await nuevaTarea.save();
    console.log("Tarea agregada con éxito:", nuevaTarea);
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la tarea', error });
  }
};

// Eliminar una tarea
const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaEliminada = await Tarea.findByIdAndDelete(id);

    if (!tareaEliminada) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json({ message: 'Tarea eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea', error });
  }
};

const buscarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);

    if (!tarea) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json(tarea);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la tarea', error });
  }
};

export { getTareas, agregarTarea, eliminarTarea, buscarTarea };
