import express from 'express'
const router = express.Router();

//DEFINICION DE LAS RUTAS DE PRODUCTS
router.get('/products', (req,res) => {
    // res.send('<h1>Products</h1>');
    res.json({
        msg:'muñecas'
    });
});

export default router;