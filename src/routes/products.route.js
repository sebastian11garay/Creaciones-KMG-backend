const  express = require('express');

const router = express.Router();

router.get('/products', (req,res) => {
    // res.send('<h1>Products</h1>');
    res.json({
        msg:'muñecas'
    });
});

module.exports = router;