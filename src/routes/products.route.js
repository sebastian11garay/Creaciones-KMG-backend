import { Router } from "express";
import { createProducts, deleteproductById, getAllProducts, getProductsById, updateProductById } from "../controllers/products.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES, ROLES } from "../config/global.config.js";
const router = Router();

//DEFINICION DE LAS RUTAS DE PRODUCTS
router.post( '/', 
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    createProducts );
router.get( '/', 
    // [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getAllProducts) ;
router.get( '/:idProduct', 
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    getProductsById );
router.delete('/:idProduct', 
        [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    deleteproductById);
router.patch( '/:idProduct',
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    updateProductById );


export default router;