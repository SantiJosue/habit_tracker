import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if(!authHeader) {
            return res.status(401).json({
                message: 'No autorizado'
            })
        }

        const parts = authHeader.split(' ')
        
        if(parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Token inválido'
            })
        }

        const token = parts[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        req.user = decoded

        next()
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token expirado'
            })
        }
        if(error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message: 'Token inválido'
            })
        }
        next(error)
    }
}