const express = require('express');

const app = express();
const PORT = 3000;

//DEFINIR RUTAS
app.get('/health' , (req,res) => {
    res.send('<h1>health</h1>');

});

//LANZANDO EL SERVIDOR WEB USANDO EXPRESS
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/health :()`);
});