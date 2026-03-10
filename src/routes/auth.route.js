import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { loginUser, reNewToken } from "../controllers/auth.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES } from "../config/global.config.js";



const router = Router();

// definir las rutas de autenticacion

//http://localhost:3000/api/v1/auth/login
router.post( '/login', loginUser  );
//http://localhost:3000/api/v1/auth/registerer
router.post( '/register', createUser);              //solo registra usuario
//http://localhost:3000/api/v1/auth/renew-token
   
router.get(
    '/renew-token', 
    [authenticationUser, authUser(ALLOWED_ROLES)],
    reNewToken
 );

export default router;
