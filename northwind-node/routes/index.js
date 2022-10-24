const { Router } = require('express');
const ProductRouter = require('./product');
const CustomerRouter = require('./customer');

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
        this.createCustomerRouter();
    }

    createProductRouter() {
        const productRouter = new ProductRouter(this.database);
        this.routes.use('/product', productRouter.getRoutes())
    }

    createCustomerRouter() {
        const customerRouter = new CustomerRouter(this.database);
        this.routes.use('/customer', customerRouter.getRoutes())
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = AppRouter;
