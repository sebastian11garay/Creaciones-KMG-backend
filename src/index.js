import express from 'express';  //IMPORTACION
import cors from 'cors';

import dbConnection from'./config/mongo.config.js';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/users.route.js';
import productsRoute from './routes/products.route.js';
import categoryRoute from './routes/category.route.js';


const app = express(); //INVOCANDO CORE EXPRESS
const PORT = process.env.PORT ||  3000; //DEFINIENDO EL PUERTO ESCUCHA

dbConnection();  //EJECUTA LA CONEXION A LA BASE DE DATOS

app.use(cors());
app.use(express.json());

app.get('/health', (req,res) =>{
    // res.send('<h1>Healt</h1>');

    res.json({
        path:'/health',
        msg: 'welcome to creations-kmg'
    });
});


//Middlewares Express
app.use('/api/v1/auth', authRoute );                   //login/register/renewToken
app.use('/api/v1/users', userRoute );              // CRUD (users) : autenticado    
app.use('/api/v1/products',productsRoute);
app.use('/api/v1/category', categoryRoute )


//LANZANDO EL SERVIDOR WEB USANDO EXPRESS
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
    
});