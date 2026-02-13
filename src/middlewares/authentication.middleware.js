import { verifyToken } from "../helpers/jwt.helper.js";
import { dbGetUserById } from "../services/user.service.js";

const authenticationUser = async (req, res, next) => {
    
    try {
        const token = req.header( 'X-Token' );    

        if(!token){
            return res.json({msg: 'Token vacia'});
        }
         // Paso 2.5: Validar el formato del token (Debe tener 3 partes separadas por puntos)
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) {
            return res.status(400).json({
                msg: 'Error: Formato de token invalido (Faltan componentes)'
            });
        }
    
        const payload = verifyToken(token);
        if (!payload) {
            return res.status(401).json({
                msg: 'Error: Token invalido o expirado'
            });
        }

        // Paso 4: Eliminar propiedades sensibles del payload
        delete payload.iat;
        delete payload.exp;

        // Paso 5: Consultar la existencia del usuario en la base de datos
        const user = await dbGetUserById(payload.id);

        if (!user) {
            return res.status(401).json({ msg: 'Token no valido - usuario no existe en DB' });
        }

        // Paso 6: Verificar el estado del usuario activo
        if (!user.isActive) {
            return res.status(401).json({ msg: 'Token no valido - usuario con estado inactivo' });
        }

        
        req.payload = payload;
        req.user = user;

        next();



    } catch (error) {
        res.json ({msg: 'Error: token invaliso.'})
    }
}


export default authenticationUser;