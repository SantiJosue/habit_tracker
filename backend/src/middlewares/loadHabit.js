import mongoose from "mongoose"
import Habit from "../models/HabitModel.js"

export const loadHabit = async (req, res, next) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'ID inválido'
            })
        }
        
        const habit = await Habit.findById(id)

        if(!habit) {
            return res.status(404).json({
                message: 'Habito no encontrado'
            })
        }

        req.habit = habit
        next()
    } catch (error) {
        next(error)
    }
}