const { Router } = require('express');
const ProductRouter = require('./product');
const CustomerRouter = require('./customer');
const SalesOrderRouter = require('./salesOrder');

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
        this.createSalesOrderRouter();
    }

    createProductRouter() {
        const productRouter = new ProductRouter(this.database);
        this.routes.use('/product', productRouter.getRoutes())
    }

    createCustomerRouter() {
        const customerRouter = new CustomerRouter(this.database);
        this.routes.use('/customer', customerRouter.getRoutes())
    }

    createSalesOrderRouter() {
        const salesOrderRouter = new SalesOrderRouter(this.database);
        this.routes.use('/order', salesOrderRouter.getRoutes())
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = AppRouter;
