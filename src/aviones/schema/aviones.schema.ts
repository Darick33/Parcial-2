import mongoose from 'mongoose';

export const AvionesSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
})
