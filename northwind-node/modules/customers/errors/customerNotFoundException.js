const NotFoundException = require('../../../errors/notFoundException')

class CustomerNotFoundException extends NotFoundException {
    constructor() {
        super("Customer");
    }
}

module.exports = CustomerNotFoundException;