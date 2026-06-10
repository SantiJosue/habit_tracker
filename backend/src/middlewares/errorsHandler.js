export const errorHandler = (err, req, res, next) => {
    if(err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(err => err.message)
        
        return res.status(400).json({
            message: 'Error de validación',
            errors
        })
    }

    return res.status(500).json({
        message: err.message
    }) 
}   