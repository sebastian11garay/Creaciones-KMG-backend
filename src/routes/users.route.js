//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser, getAllUsers } from '../controllers/user.controller.js';
const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/',  createUser );
router.get( '/', getAllUsers);


//exportando router usando commonJS
export default router;