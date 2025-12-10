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

const dbGetUserByEmail =  async ( email) => {
   return await userModel.findOne({ email });
}

const dbDeletedUserById = async ( _id) => {
    return await userModel.findOneAndDelete({ _id });
    // return await userModel.findByIdAndDelete( _id );
}

const dbUserUpdate = async ( id, userUpdated ) => {
    return await userModel.findByIdAndUpdate (
        id,
        userUpdated,
        { new: true }
    );
}


export {
    dbRegisterUser,
    dbGetAllUsers,
    dbGetUserById,
    dbDeletedUserById,
    dbUserUpdate,
    dbGetUserByEmail
}