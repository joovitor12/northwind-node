const {Router} = require('express');
const ProductRouter = require('./product');

class AppRouter {

    database;
    routes;

    constructor(database) {
        this.database = database;
        this.routes = Router();

        this.createRoutes();
    }

    createRoutes() {
        this.createProductRouter();
    }

    createProductRouter() {
        const productRouter = new ProductRouter(this.database.getProducRepository());
        this.routes.use('/product', productRouter.getRoutes())
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = AppRouter;
