import bcrypt from 'bcrypt';
    
const encryptedPassword = ( passwordUser ) => {
    try {
        const salt = bcrypt.genSaltSync(9);
        
        const hashPassword = bcrypt.hashSync(
            passwordUser,
            salt
        );

        return hashPassword;
    

    } catch (error) {
        console.error(error);
        return null;
    }

}
const verifyEncriptedPassword = ( originalPassword, hashPassword ) => {

    try {
        return bcrypt.compareSync(
            originalPassword,
            hashPassword
        );

    } catch (error) {
        console.error(error);
        return null;
    }


}

export {
    encryptedPassword,
    verifyEncriptedPassword
    
}