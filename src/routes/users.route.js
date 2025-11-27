//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
const express = require('express');

const router = express.Router();

//DEFINICION DE LAS RUTAS (ENDPOINTS)
router.get('/users' , (req,res) => {
    // res.send('<h1>Users</h1>');
    const users = [
        {name: "Sebastian", age: 21},
        {name: "Luisa", age: 20},
    ];
    res.json(users)
});




//exportando router usando commonJS
module.exports =router;