import mongoose, { Schema } from "mongoose"

export const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        minlenght: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        trim: true,
        minlenght: [3, 'El email debe tener al menos 3 caracteres'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        minlenght: [3, 'El password debe tener al menos 3 caracteres'],
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
export default User