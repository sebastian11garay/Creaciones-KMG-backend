import { Router } from "express";
import { createProducts, deleteproductById, getAllProducts, getProductsById, updateProductById } from "../controllers/products.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES } from "../config/global.config.js";
const router = Router();

//DEFINICION DE LAS RUTAS DE PRODUCTS
router.post( '/', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    createProducts );
router.get( '/', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getAllProducts) ;
router.get( '/:idProduct', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getProductsById );
router.delete('/:idProduct', 
        [ authenticationUser,authUser(ALLOWED_ROLES)],  
    deleteproductById);
router.patch( '/:idProduct',
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    updateProductById );


export default router;