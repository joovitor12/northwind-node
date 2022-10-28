const MissingData = require('../../../errors/missingData');

class MissingDataSalesOrderException extends MissingData {
    constructor() {
        super("Product");
    }
}

module.exports = MissingDataSalesOrderException;
