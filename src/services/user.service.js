import userModel from "../models/user.model.js"

//servicio: se debe de encargar solo de la comunicacion directa de la base de datos
const registerUser = async (newUser) => {
    return await userModel.create(newUser);   // async/await por que el modelo retorna una promesa
}


export {
    registerUser
}