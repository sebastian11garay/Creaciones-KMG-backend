import jwt from 'jsonwebtoken';

const generateToken = (payload) => {

    try {
        
        const token = jwt.sign(
    
            payload,
            process.env.JWT_SEED,
            {expiresIn: '1h'}
        );
        return token;

    } catch (error) {
        console.error(error);
        return null;
    }


}

const verifyToken = (token) => {

    try {
        
        return jwt.verify(
            token,
            process.env.JWT_SEED
    
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export {
    generateToken,
    verifyToken
}