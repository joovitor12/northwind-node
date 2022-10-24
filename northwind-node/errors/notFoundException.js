const HttpException = require('./httpException');

class NotFoundException extends HttpException {
    constructor(model) {
        const errorMessage = model + " não encontrado";
        super(404, errorMessage, {error: errorMessage});
    }
}

module.exports = NotFoundException;
