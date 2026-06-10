import User from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generateToken.js"

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Datos inválidos'
            })
        }

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Todos los campos son obligatorios'
            })
        }

        const userExist = await User.findOne({ email })

        if(userExist) {
            return res.status(409).json({
                message: 'El email ya esta registrado'
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        res.status(201).json({
            message: 'Usuario registrado correctamente',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Datos inválidos'
            })
        }

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email y contraseña son obligatorios'
            })
        }

        const userExist = await User.findOne({ email })

        if(!userExist) {
            return res.status(404).json({
                message: 'No se encontro una cuenta asociada a ese email'
            })
        }

        const validUser = await bcrypt.compare(password, userExist.password)

        if(!validUser) {
            return res.status(401).json({
                message: 'Credenciales inválidas'
            })
        }

        console.log(userExist._id)
        const token = generateToken(userExist._id)

        res.json({
            message: 'Inicio de sesión correcto',
            token
        })

    } catch (error) {
        next(error)
    }
}