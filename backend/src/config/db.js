import mongoose from "mongoose";
import colors from 'colors'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(colors.bold.magenta('Servidor conectado a MongoDB'))
    } catch (error) {
        console.log(error)
        throw new Error(colors.bold.red('Error al conectarse a MongoDB'))
    }
}