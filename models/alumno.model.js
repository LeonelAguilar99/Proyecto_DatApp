import mongoose, {Schema} from "mongoose";

const Alumnos = new Schema({
    matricula: { type: String, maxlenght: 20, required: true},
    nombre: { type: String, maxlenght: 50, required: true },
    correo: String,
    telefono: String,
      createdAt:{
        type: Date, default: Date.now
    }
});

const Alumno = mongoose.model('alumno', Alumnos);

export default Alumnos;