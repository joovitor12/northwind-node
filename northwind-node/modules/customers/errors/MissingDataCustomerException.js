const MissingData = require('../../../errors/missingData');

class MissingDataCustomerException extends MissingData {
    constructor(data) {
        super("Customer" + data != null ? ": " + data : "");
    }
}

module.exports = MissingDataCustomerException;
