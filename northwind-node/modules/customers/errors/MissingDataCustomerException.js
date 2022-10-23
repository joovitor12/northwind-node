const MissingData = require('../../../errors/missingData');

class MissingDataCustomerException extends MissingData {
    constructor() {
        super("Customer");
    }
}

module.exports = MissingDataCustomerException;