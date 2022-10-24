const HttpException = require('../errors/httpException');

class ErrorMiddleware {
    handle(error, request, response, next) {
        if (error instanceof HttpException) {
                return response.status(error.statusCode).json(error.response);
        }

        console.error(error);
        return response.status(500).json({error: "error unrecognized"});
    }
}

module.exports = ErrorMiddleware;
