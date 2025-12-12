
import jwt from 'jsonwebtoken';

const generateToken = ( payload ) => {
    const token = jwt.sign(
        payload,//carga util
        'ksddsdhdhskj',//semilla (palabra secreta) ==> salt
        { expiresIn: '1h' }//opciones de configuracion del token


    );

   console.info( 'token: ', token );
    return token;
     
}

const verifyToken = (token) => {
    return jwt.verify(
        token,              //token valido
        'ksddsdhdhskj',     // semilla(palabra secreta)    


    );
}

export {
    generateToken,
    verifyToken
}