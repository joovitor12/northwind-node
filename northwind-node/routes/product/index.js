const { Router } = require('express');
const ProductFactory = require('../../modules/products/factory/productServiceFactory');

class ProductRouter {

    productController;
    routes;

    constructor(database) {
        this.productController = new ProductFactory(database.getConnection()).createProductController();
        this.routes = Router()

        this.routes.get('/:id', async (request, response)  => {
            const { id } = request.params;
            const product = await this.productController.findOne(id);
            return response.json(product);
        });

        this.routes.get('/', async (request, response)  => {
            const products = await this.productController.find();
            return response.json(products);
        });

        this.routes.post('/', async (request, response)  => {
            const product = await this.productController.create(request.body);
            return response.json(product);
        });

        this.routes.delete('/:id', async (request, response)  => {
            const { id } = request.params;
            const product = await this.productController.delete(id);
            return response.json(product);
        });

        this.routes.put('/:id', async (request, response)  => {
            const { id } = request.params;
            const product = await this.productController.update(id, request.body);
            return response.json(product);
        });
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = ProductRouter;
