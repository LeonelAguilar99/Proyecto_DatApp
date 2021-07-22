import mongoose, {Schema} from "mongoose";

const Alumnos = new Schema({
    matricula: String,
    nombre: String,
    correo: String,
    telefono: String,

    createAt:{
        type: Date, default: Date.now
    }
});

const Alumno= mongoose.model('alumno', Alumnos);

export default Alumno;