// backend/models/tarea.js
import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  }
});

const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;
