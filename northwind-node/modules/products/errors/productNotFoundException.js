const NotFoundException = require('../../../errors/notFoundException')

class ProductNotFoundException extends NotFoundException {
    constructor() {
        super("Produto");
    }
}

module.exports = ProductNotFoundException;
