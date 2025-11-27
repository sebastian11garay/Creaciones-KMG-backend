const express = require('express');

const app = express();
const PORT = 3000;

app.get('/health', (req,res) =>{
    // res.send('<h1>Healt</h1>');

    res.json({
        path:'/health',
        msg: 'welcome to creations-kmg'
    });
});



//Middlewares Express
app.use('/api/v1' ,require('./routes/users.route' ));
app.use('/api/v2' ,require('./routes/products.route.js'));


//LANZANDO EL SERVIDOR WEB USANDO EXPRESS
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/health :()`);
});