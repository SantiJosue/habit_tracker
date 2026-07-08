import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const apiService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token)
        return decoded.exp * 1000 < Date.now()
    } catch (error) {
        console.log(error)
        return true
    }
}

apiService.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token) {
            if(isTokenExpired(token)) {
                localStorage.removeItem('token')

                window.location.href = '/login'
                return Promise.reject(new Error('Token expirado'))
            }

            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/login'
        }

        return Promise.reject(error)
    }
)