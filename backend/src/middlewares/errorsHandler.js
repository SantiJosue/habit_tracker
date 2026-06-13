export const errorHandler = (err, req, res, next) => {
    if(err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(err => err.message)
        
        return res.status(400).json({
            success: false,
            message: 'Datos inválidos',
            data: errors
        })
    }

    return res.status(500).json({
        success: false,
        message: err.message,
        data: null
    })
}   