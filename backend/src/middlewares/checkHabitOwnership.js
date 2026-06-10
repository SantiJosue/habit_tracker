import Habit from "../models/HabitModel.js"

export const checkHabitOwnership = (req, res, next) => {
    try {
        const { userId } = req.user

        if(userId !== req.habit.user.toString()) {
            return res.status(403).json({
                message: 'No tienes permisos'
            })
        }

        next()
    } catch (error) {
        next(error)
    }
}