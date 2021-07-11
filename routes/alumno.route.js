import routerx from 'express-promise-router';
import alumnoController from '../controller/alumno.controller';

//const routerx = require('express-promise-router');

import AlumnoController from '../controller/alumno.controller';
//const PersonaController=require('../controller/persona.controller');

const router=routerx();

router.post('/crearAlumno', AlumnoController.agregar);
router.get('/listarAlumnos', AlumnoController.consultar);
router.get('/listarAlumno/:id', AlumnoController.consultarUno );
router.delete('/eliminarAlumno/:id', AlumnoController.eliminar);
router.put('/actualizarAlumno/:id', AlumnoController.Actualizar);


export default router;