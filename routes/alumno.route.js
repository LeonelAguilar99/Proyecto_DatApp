import routerx from 'express-promise-router';

import alumnoController from '../controller/alumno.controller';
import AlumnoController from '../controller/alumno.controller';


const router=routerx();

router.post('/newAlumno', AlumnoController.agregar);
router.get('/listarAlumnos', AlumnoController.consultar);
router.get('/listarAlumno/:id', AlumnoController.consultarUno);
router.delete('/eliminarAlumno/:id', alumnoController.eliminar);
router.put('/actualizarAlumno/:id', AlumnoController.Actualizar);

export default router;