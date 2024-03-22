import mongoose from "mongoose";

export const PasajerosSchema = new mongoose.Schema({
    nombre : { type: String, required: true },
    correo : { type: String, required: true },
    contrasenia : { type: String, required: true },
    vuelos : [{ type: mongoose.Schema.Types.ObjectId, ref: 'vuelos'}],
},
{
    timestamps: true,
    
}
);