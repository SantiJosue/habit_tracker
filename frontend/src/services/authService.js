import { apiService } from "../api/axios"

export const register = async (userData) => {
    const response = await apiService.post('/auth/register', userData)

    return response.data
}

export const login = async (userData) => {
    const response = await apiService.post('/auth/login', userData)

    localStorage.setItem('token', response.data.token)

    return response.data
}