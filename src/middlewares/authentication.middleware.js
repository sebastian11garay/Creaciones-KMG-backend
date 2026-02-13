import { verifyToken } from "../helpers/jwt.helper.js";

const authenticationUser = (req, res, next) => {
    
    try {
        const token = req.header( 'X-Token' );    

        if(!token){
            return res.json({msg: 'Token vacia'});
        }

        const payload = verifyToken(token);
        req.payload = payload;

        next();



    } catch (error) {
        res.json ({msg: 'Error: token invaliso.'})
    }
}

export default authenticationUser;