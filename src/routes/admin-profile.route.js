import { Router } from "express";
const router = Router();

router.post( '/', middlewares , controlador);

export default router;