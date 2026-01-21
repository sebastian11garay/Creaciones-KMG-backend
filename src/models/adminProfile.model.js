import { Schema, model } from "mongoose";

const adminProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  phone: String,

  permissions: [String]
}, { 
    versionKey: false,
    timestamps: true 
});

const clientProfileModel = model(
    'AdminProfile',
     adminProfileSchema);

export default clientProfileModel;