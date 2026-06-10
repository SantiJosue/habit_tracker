import Habit from "../models/HabitModel.js"

export const getHabit = async (req, res, next) => {
    try {
        const habit = req.habit
        res.json({habit})
        } catch (error) {
            next(error)
        }
}

export const createHabit = async (req, res, next) => {
    try {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Datos inválidos'
            })
        }

        const { userId } = req.user
        const { name, frequency } = req.body
        await Habit.create({
            name,
            frequency,
            user: userId
        })
        res.status(201).json({ message: 'Habito creado correctamente' })
    } catch (error) {
        next(error)
    }
}

export const getHabits = async (req, res, next) => {
    try {
        const { userId } = req.user
        const habits = await Habit.find({user: userId})
        res.json(habits)
    } catch (error) {
        next(error)
    }
}

export const editHabit = async (req, res, next) => {
    try {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Datos inválidos'
            })
        }

        const habit = req.habit

        habit.set(req.body)

        await habit.save()

        res.json({
            message: 'Habito actualizado correctamente',
            habit
        })

    } catch (error) {
        next(error)
    }
}

export const removeHabit = async (req, res, next) => {
    try {
        const habit = req.habit

        await habit.deleteOne()
        
        res.json({
            message: 'Habito eliminado correctamente'
        })
    } catch (error) {
        next(error)
    }
}