const Repository = require('../../../configs/implementations/Repository');
const Product = require("../../../models/product");

class ProductsRepository extends Repository {

    repository;

    constructor(connection, supplierModel, categoryModel) {
        const productModel = new Product();
        productModel.createModel(connection);
        super(productModel);
        this.repository = productModel.getModel();

        this.supplierModel = supplierModel.createModel(connection);
        this.categoryModel = categoryModel.createModel(connection);
    }

    async findOne(id) {
        return await this._model.findByPk(id,
            {
                include: [
                    this.supplierModel,
                    this.categoryModel
                ]
            });
    }
}


module.exports = ProductsRepository;
