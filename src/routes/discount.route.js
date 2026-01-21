import { Router } from "express";
import { createDiscount, deletedDiscountById, getAllDiscounts, getDiscountById, updateDiscountById } from "../controllers/discount.controller.js";

const router = Router();

router.post('/', [authenticationUser, authorizationUser],  createDiscount );
router.get( '/', [authenticationUser, authorizationUser], getAllDiscounts) ;
router.get( '/:idDiscount', [authenticationUser, authorizationUser], getDiscountById ); // parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idDiscount', [authenticationUser, authorizationUser], deletedDiscountById);
router.patch( '/:idDiscount', [authenticationUser, authorizationUser], updateDiscountById );

export default router;