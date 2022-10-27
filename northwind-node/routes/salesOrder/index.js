const {Router} = require('express');
const SalesOrderFactory = require('../../modules/salesOrder/factory/salesOrderServiceFactory');

class SalesOrderRouter {
    salesOrderController;
    routes;

    constructor(database) {
        this.salesOrderController = new SalesOrderFactory(database.getConnection()).createSalesOrderController();
        this.routes = Router();

        this.routes.get('/', async (request, response) => {
            const salesOrders = await this.salesOrderController.find();
            return response.json(salesOrders)
        });

    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = SalesOrderRouter;
