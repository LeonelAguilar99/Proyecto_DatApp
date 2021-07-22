import routerx from 'express-promise-router';

import AlumnoRoute from './alumno.route';

const router=routerx();

router.use('/alumno', AlumnoRoute);

export default router;