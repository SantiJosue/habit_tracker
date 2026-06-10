import { Router } from "express";
import { createHabit, editHabit, getHabit, getHabits, removeHabit } from "../controllers/habitController.js";
import { loadHabit } from "../middlewares/loadHabit.js";
import { checkHabitOwnership } from "../middlewares/checkHabitOwnership.js";

const router = Router()

router.route('/')
    .get(getHabits)
    .post(createHabit)

router.route('/:id')
    .get(loadHabit, checkHabitOwnership, getHabit)
    .put(loadHabit, checkHabitOwnership, editHabit)
    .delete(loadHabit, checkHabitOwnership, removeHabit)

export default router