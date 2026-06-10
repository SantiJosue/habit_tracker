import mongoose from "mongoose"
import User from "../models/UserModel.js"

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'ID inválido'
            })
        }

        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            })
        }

        res.json({user})
    } catch (error) {
        next(error)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

export const editUser = async (req, res, next) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'ID inválido'
            })
        }
        
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Datos inválidos'
            })
        }


        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            })
        }

        user.set(req.body)

        await user.save()

        res.json({
            message: 'Usuario actualizado correctamente',
            user
        })
    } catch (error) {
        next(error)
    }
}

export const removeUser = async (req, res, next) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'ID inválido'
            })
        }

        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            })
        }

        await user.deleteOne()
        res.json({
            message: 'Usuerio eliminado correctamente'
        })
    } catch (error) {
        next(error)
    }
}