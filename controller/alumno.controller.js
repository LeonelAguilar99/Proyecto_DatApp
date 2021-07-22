import model from "../models";

export default {
    agregar: async (req, res, next) => {
        try {
            const { matricula, nombre, correo, telefono} = req.body;

            const alumnos = new model.Alumno({
                matricula,
                nombre,
                correo,
                telefono,
            })

            const registro = await alumnos.save();
            res.status(200).json(registro);
            console.log(req.body);
        }catch (e) {
            res.status(500).send({
                message: "Ocurrio un error al guardar los datos",
            });

            next(e);
        }
    },

    consultar: async (req, res, next) => {
        try {
            const alumnos = await model.Alumno.find();
            console.log(alumnos);
            res.json(alumnos);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al consultar",
            });

            next(error);
        }
    },

    consultarUno: async (req, res, next) => {
        try{
            const consulta = await model.Alumno.findById(req.params.id);

            if (!consulta) {
                res.status(404).send({
                    message: "El registro con el id solicitado no existe",
                });
            } else {
                res.status(200).json(consulta);
            }
        } catch (e) {
            res.status(500).send({
                message: "El id no existe",
            });
            next(e);
        }
    },

    eliminar: async (req, res, next) => {
        try{
            const eliminarAlumno = await model.Alumno.findByIdAndDelete(req.params.id);
            res.status(200).send({
                message: "La informacion ha sido eliminado correctamente"
            });
        } catch (error) {
            res.status(500).send({
                message: "La id para eliminar no existe",
            });

            next(error);
        }
    },

    Actualizar: async (req, res, next) => {
        try{
            const {matricula, nombre, correo, telefono}=req.body;

            const actualizarAlumno={
                matricula,nombre,correo,telefono
            }

            const datosActuales = await model.Alumno.findByIdAndUpdate(req.params.id, actualizarAlumno);
            res.json(actualizarAlumno);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al tratar de actualizar"
            });

            next(error);
        }
    }
};