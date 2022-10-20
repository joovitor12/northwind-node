const Repository = require('../../../configs/interfaces/Repository');
const Product = require("../../../models/product");

class ProductsRepository extends Repository {

    repository;

    constructor(connection) {
        const productModel = new Product(connection);
        super(productModel);
        this.repository = productModel.instance();
    }
}


module.exports = ProductsRepository;
