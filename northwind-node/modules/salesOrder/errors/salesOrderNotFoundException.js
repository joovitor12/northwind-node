const NotFoundException = require('../../../errors/notFoundException')

class SalesOrderNotFoundException extends NotFoundException {
    constructor() {
        super("Produto");
    }
}

module.exports = SalesOrderNotFoundException;
