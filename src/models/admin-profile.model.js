import { Schema, model } from "mongoose";

const adminProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },

  // name: {
  //   type: String,
  //   required: true
  // },

  // permissions: [String] // Decirle a la IA que maneje los permisos con los roles del UserModel
}, { 
    versionKey: false,
    timestamps: true 
});

const adminProfileModel = model(
    'AdminProfile',
     adminProfileSchema);

export default adminProfileModel;