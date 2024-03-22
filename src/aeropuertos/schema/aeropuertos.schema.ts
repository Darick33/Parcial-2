import mongoose from 'mongoose';

export const AeropuertosSchema = new mongoose.Schema({
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
})
