const FindProductUseCase = require('../useCases/findProductUseCase');
const FindProductsUseCase = require('../useCases/findProductsUseCase');
const CreateProductUseCase = require('../useCases/createProductUseCase');
const DeleteProductUseCase = require('../useCases/deleteProductUseCase');
const UpdateProductUseCase = require('../useCases/updateProductUseCase');

const ProductRepository = require('../repositories/productRepository');
const ProductController = require('../controllers/productController');

class ProductServiceFactory {

    constructor(connection) {
        this.productRepository = new ProductRepository(connection);
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
