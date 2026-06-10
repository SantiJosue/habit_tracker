import express from 'express'
import cors from 'cors'
import corsOptions from './config/corsConfig.js'
import habitRoutes from './routes/habitRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { errorHandler } from './middlewares/errorsHandler.js'
import { verifyToken } from './middlewares/authToken.js'

const app = express()

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/habits', verifyToken, habitRoutes)
app.use('/api/user', verifyToken, userRoutes)
app.use('/api/auth', authRoutes)

// Middleware de errores
app.use(errorHandler)

export default app