import { apiService } from "../api/axios"

export const getHabits = async () => {
    const { data } = await apiService.get('/habits')
    return data
}

export const createHabit = async (habitData) => {
    const { data } = await apiService.post('/habits', habitData)
    return data
}

export const editHabit = async (habitId, habit) => {
    const { data } = await apiService.put(`/habits/${habitId}`, habit)
    return data
}

export const removeHabit = async (habitId) => {
    const habit = await apiService.delete(`/habits/${habitId}`)
    return habit
}

export const completeHabit = async (habitId) => {
    const { data } = await apiService.patch(`/habits/${habitId}`)
    return data
}