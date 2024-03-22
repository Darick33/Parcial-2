import mongoose from 'mongoose';
export const VuelosSchema = new mongoose.Schema(
  {
    fecha: { type: Date, required: true },
    aeropuertoE: { type: mongoose.Schema.Types.ObjectId, ref: 'aeropuertos' },
    aeropuertoS: { type: mongoose.Schema.Types.ObjectId, ref: 'aeropuertos' },
    aviones: { type: mongoose.Schema.Types.ObjectId, ref: 'aviones' },
  },
  {
    timestamps: true,
  },
);
