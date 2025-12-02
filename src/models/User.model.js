import { Schema, model } from "mongoose";
// creando una instancia del esquema de entidad de user
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        // Reglas
        type: String,        //define el tipo
        required: true,      // es obligatorio
        //Modificadores
        unique: true,        //obliga a que el valor sea unico
        trim: true,          //elimina los espacios en blanco (inicio/final del string)
        lowercase: true      // transforma todo a minusculas
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 12
    },
    role: {
        type: String,
        required: true,
        enum: [ 'super-admin', 'admin', 'colaborator', 'registered'  ],
        default: 'registered'
    },
    isActive: {
        type: Boolean,
        default: true

    },
    // code: {
    //     type: String,
    //     trim: true
    // }

},{}); 

// crear modelo user basado en el esquema userSchema

const userModel = model(
    'users',        // nombre de la coleccion
    userSchema      // esquema asociado al modelo
);

// exportar el modelo user, para que sea usado en otras partes de la aplicacion 
export default userModel;
