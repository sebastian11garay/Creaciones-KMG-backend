import { Schema, model } from "mongoose";
import { ALLOWED_CLIENT_TYPES } from "../config/global.config.js";

const loyaltyMetricsSchema = new Schema({
  joinDate: {
    type: Date,
    default: Date.now
  },
  totalVolumeBought: {
    type: Number,
    default: 0
  },
  completedOrdersCount: {
    type: Number,
    default: 0
  }
}, { _id: false });

const clientProfileSchema = new Schema({
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

  client_type: {
    type: String,
    enum: ALLOWED_CLIENT_TYPES,
    required: true
  },

  phone: String,

  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },

  loyaltyMetrics: loyaltyMetricsSchema,

  isActive: {
    type: Boolean,
    default: true
  }
}, { 
    versionKey: false,
    timestamps: true 
});

const ClientProfileModel = model(
    'ClientProfile',
     clientProfileSchema);

export default ClientProfileModel;
