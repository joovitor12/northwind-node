const FindProductService = require('../../products/services/findProductService')
const FindProductsService = require('../../products/services/findProductsService')

class ProductController {

    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async findProducts() {
        const findProductsService = new FindProductsService(this.productRepository);

        return await findProductsService.execute();
    }

    async createProduct() {

    }

    async findProduct(id) {
        const findProductService = new FindProductService(this.productRepository);

        return await findProductService.execute(id);
    }

    async deleteProduct() {

    }

    async updateProduct() {

    }
}

module.exports = ProductController;
