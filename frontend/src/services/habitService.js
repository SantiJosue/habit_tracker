import { apiService } from "../api/axios"

export const getHabits = async () => {
    const { data } = await apiService.get('/habits')
    return data
}