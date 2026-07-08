import Habit from "../models/HabitModel.js"

export const getHabit = async (req, res, next) => {
    try {
        const habit = req.habit
        return res.json({
            success: true,
            message: 'Hábito obtenido correctamente',
            data: habit
        })
        } catch (error) {
            next(error)
        }
}

export const createHabit = async (req, res, next) => {
    try {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Datos inválidos',
                data: null
            })
        }

        const { userId } = req.user
        const { name, frequency } = req.body
        const habit = await Habit.create({
            name,
            frequency,
            user: userId
        })

        return res.status(201).json({
            success: true,
            message: 'Hábito creado correctamente',
            data: habit
        })
    } catch (error) {
        next(error)
    }
}

export const getHabits = async (req, res, next) => {
    try {
        const { userId } = req.user
        const habits = await Habit.find({user: userId})
        return res.json({
            success: true,
            message: 'Hábitos obtenidos correctamente',
            data: habits
        })
    } catch (error) {
        next(error)
    }
}

export const editHabit = async (req, res, next) => {
    try {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Datos inválidos',
                data: null
            })
        }

        const habit = req.habit

        habit.set(req.body)

        await habit.save()

        res.json({
            success: true,
            message: 'Hábito actualizado correctamente',
            data: habit
        })

    } catch (error) {
        next(error)
    }
}

export const removeHabit = async (req, res, next) => {
    try {
        const deletedHabit = req.habit

        await deletedHabit.deleteOne()
        
        return res.status(200).json({
            success: true,
            message: 'Hábito eliminado correctamente',
            data: deletedHabit
        })
    } catch (error) {
        next(error)
    }
}

export const completeHabit = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id)

        if (!habit) {
            return res.status(404).json({
                message: 'Hábito no encontrado'
            })
        }

        const now = new Date()

        const today = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        )

        // Primera vez completando
        if (!habit.lastCompletedAt) {
            habit.streak = 1
            habit.lastCompletedAt = now

            await habit.save()

            return res.json({
                message: 'Hábito completado',
                data: habit
            })
        }

        const lastCompleted = new Date(habit.lastCompletedAt)

        const lastDay = new Date(
            lastCompleted.getFullYear(),
            lastCompleted.getMonth(),
            lastCompleted.getDate()
        )

        const diffTime = today - lastDay

        const diffDays = diffTime / (1000 * 60 * 60 * 24)

        // Ya completó hoy
        if (diffDays === 0) {
            return res.status(400).json({
                message: 'Ya completaste este hábito hoy'
            })
        }

        // Racha continua
        if (diffDays === 1) {
            habit.streak += 1
        } else {
            // Perdió la racha
            habit.streak = 1
        }

        habit.lastCompletedAt = now

        await habit.save()

        res.json({
            success: true,
            message: 'Hábito completado',
            data: habit
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al completar hábito'
        })
    }
}