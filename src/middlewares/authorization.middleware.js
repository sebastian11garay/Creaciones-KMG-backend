import { ALLOWED_ROLES } from "../config/global.config.js";

const authUser = async (req, res, next) => {
    const allowedRoles = ['registered'];
    try {
        const { role } = req.payload;
        if (!role) {
            return res.json({ msg: 'Error: No tiene permisos (rol no define)' });
        }
        if (!allowedRoles.includes(role)) {
            return res.json({ msg: 'Error: no esta autorizado para esta acccion' });
        }
        next();


    } catch (error) {
        res.json({ msg: 'Error: en autorizacion del servicio' });
    }
}

export default authUser;