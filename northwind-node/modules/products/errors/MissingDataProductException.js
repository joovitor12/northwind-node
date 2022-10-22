const MissingData = require('../../../errors/missingData');

class MissingDataProductException extends MissingData {
    constructor() {
        super("Product");
    }
}

module.exports = MissingDataProductException;
