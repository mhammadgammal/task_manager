const NotFoundException = require('../exception/notFoundExeption');
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof NotFoundException) {
        res.status(404).json(
            {
                status: 'error',
                message: err.message,
            }
        );
    }
    next(err);
}

module.exports = errorHandlerMiddleware;