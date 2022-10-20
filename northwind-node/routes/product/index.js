const { Router } = require('express');
const ProductController = require('../../modules/products/controllers/productController')

class ProductRouter {

    productController;
    productRepository;
    routes;

    constructor(productRepository) {
        this.productRepository = productRepository;
        this.productController = new ProductController(this.productRepository);
        this.routes = Router()

        this.findProduct();
    }

    findProduct() {
        this.routes.get('/:id', async (request, response)  => {
            const { id } = request.params;
            const product = await this.productController.findProduct(id);
            return response.json(product);
        });

        this.routes.get('/', async (request, response)  => {
            const products = await this.productController.findProducts();
            return response.json(products);
        });
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = ProductRouter;
