// backend/routes/tareas.js
import express from 'express';
import { getTareas, agregarTarea, eliminarTarea,buscarTarea } from '../controllers/tareaController.js';

const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/tareas', getTareas);

// Ruta para agregar una nueva tarea
router.post('/tareas', agregarTarea);

// Ruta para eliminar una tarea
router.delete('/tareas/:id', eliminarTarea);

router.get('/tareas/:id', buscarTarea)

export default router;
