import ErrorHandler from '../utils/errorHandler.js';

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    // // Wrong mongodb id error
    // if(err.name === "CastError"){
    //     const message = `Resource not found, Invalid: ${err.path}`
    //     err = new ErrorHandler(message, 400)
    // }

    // Mongoose duplicate key error
    if(err.name === 'MongoServerError'){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400)
    }

    // Wrong JWT Error
    if(err.name === 'JsonWebTokenError'){
        const message = `Json web token is invalid, Try again.`;
        err = new ErrorHandler(message, 400)
    }

        // JWT Expire Error
        if(err.name === 'TokenExpiredError'){
            const message = `Json web token is expired, Try again.`;
            err = new ErrorHandler(message, 400)
        }

    res.status(err.statusCode).json({
        success: false,
        err: err.stack,
        message: err.message
    })
}