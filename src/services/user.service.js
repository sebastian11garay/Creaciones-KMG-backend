import userModel from "../models/user.model.js"

//servicio: se debe de encargar solo de la comunicacion directa de la base de datos
const dbRegisterUser = async (newUser) => {
    return await userModel.create(newUser);   // async/await por que el modelo retorna una promesa
}
const dbGetAllUsers = async () => {
    return await userModel.find();
}

const dbGetUserById =  async ( _id) => {
   return await userModel.findOne({ _id });
}



export {
    dbRegisterUser,
    dbGetAllUsers,
    dbGetUserById
}