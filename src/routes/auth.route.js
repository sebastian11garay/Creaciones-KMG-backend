import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();

// definir las rutas de autenticacion

//http://localhost:3000/api/v1/auth/login
// router.post( '/login',  );
//http://localhost:3000/api/v1/auth/registerer
router.post( '/register', createUser);              //solo registra usuario
//http://localhost:3000/api/v1/auth/renew-token
// router.get( '/renew-token' );

export default router;
