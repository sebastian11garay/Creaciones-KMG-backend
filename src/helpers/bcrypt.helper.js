import bcrypt from 'bcrypt';
// encriptar la contrasenia
const encryptedPassword = ( passwordUser) => {
    const salt = bcrypt.genSaltSync();  // generar fragmento o cadena aleatoria

    console.log( salt );

    // combinar clave del usuario, con el salt
    const hashPassword = bcrypt.hashSync(
        passwordUser,       // contrasenia del usuario sin encriptar
        salt                // cadena que genera aleatoriamente
    );

    return hashPassword;     // devuelve la contrasenia encriptada

 }

//verificar la contrasenia
const verifyEncriptedPassword = (req, res) => {

}

export {
    encryptedPassword,
    verifyEncriptedPassword
}
