import express from 'express';  //IMPORTACION

import dbConnection from'./config/mongo.config.js';
import userRoute from './routes/users.route.js';
import productsRoute from './routes/products.route.js';

const app = express(); //INVOCANDO CORE EXPRESS
const PORT = 3000; //DEFINIENDO EL PUERTO ESCUCHA

dbConnection();  //EJECUTA LA CONEXION A LA BASE DE DATOS

app.get('/health', (req,res) =>{
    // res.send('<h1>Healt</h1>');

    res.json({
        path:'/health',
        msg: 'welcome to creations-kmg'
    });
});


//middlewares para separar las rutas por entidad 

app.use( express.json() );      //Middlewares Express


app.use('/api/v1/users', userRoute );
app.use('/api/v2/products',productsRoute);


//LANZANDO EL SERVIDOR WEB USANDO EXPRESS
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/health :()`);
});