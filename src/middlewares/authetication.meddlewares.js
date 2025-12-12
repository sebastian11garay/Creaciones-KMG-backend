
import { verifyToken } from "../helpers/jwt.helper.js";

const authenticationUser = (req, res, next) => {


    try {
        // paso 1: obtener el string donde viene el token
            const token = req.header ( 'X-Token' );
            
            //paso 2: verificar que la cadena no venga vacia
            if( ! token ){
               return res.json ({ msg: 'error: token vacia'});
            }
        
            // paso 3: verificar que el token es valido
            const payload = verifyToken ( token );

            // paso 4: enviar atraves del requeest los datos del payload 
            req.payload = payload;
        
            next();
        
    } catch (error) {
        console.error(error)
        res.json({msg: 'error: token invalido'});
        
    }

}

export default authenticationUser;