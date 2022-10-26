const FindProductUseCase = require('../useCases/findProductUseCase');
const FindProductsUseCase = require('../useCases/findProductsUseCase');
const CreateProductUseCase = require('../useCases/createProductUseCase');
const DeleteProductUseCase = require('../useCases/deleteProductUseCase');
const UpdateProductUseCase = require('../useCases/updateProductUseCase');

const ProductRepository = require('../repositories/productRepository');
const ProductController = require('../controllers/productController');

const Supplier = require('../../../models/supplier');
const Category = require('../../../models/category');

class ProductServiceFactory {

    constructor(connection) {
        this.productRepository = new ProductRepository(
            connection,
            new Supplier(),
            new Category()
        );
    }

    createProductController() {
        return new ProductController(
            new FindProductsUseCase(this.productRepository),
            new FindProductUseCase(this.productRepository),
            new CreateProductUseCase(this.productRepository),
            new DeleteProductUseCase(this.productRepository),
            new UpdateProductUseCase(this.productRepository)
        );
    }
}

module.exports = ProductServiceFactory;
