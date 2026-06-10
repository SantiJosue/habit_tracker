import mongoose, { Schema, Types } from "mongoose";

export const habitSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        trim: true
    },
    frequency: {
        type: String,
        required: [true, 'La frecuencia es obligatoria'],
        enum: ['daily', 'weekly']
    },
    streak: {
        type: Number,
        default: 0
    },
    completedToday: {
        type: Boolean,
        default: false
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

const Habit = mongoose.model('Habit', habitSchema)
export default Habit