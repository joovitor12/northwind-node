const HttpException = require('./httpException');

class MissingDataError extends HttpException {
    constructor(model) {
        const errorMessage = "Erro ao criar objeto: " + model + " Informações faltando";
        super(400, errorMessage, {errors: errorMessage});
    }
}

module.exports = MissingDataError;
