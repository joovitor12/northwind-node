class ProductNotFoundException extends Error {
    constructor() {
        super("Produto não encontrado");
    }
}

module.exports = ProductNotFoundException;
