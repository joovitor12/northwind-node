const SalesOrderRepository = require('../repositories/salesOrderRepository');
const SalesOrderController = require('../controllers/salesOrderController');

const Customer = require('../../../models/customers');
const Employee = require('../../../models/employee');
const Shipper = require('../../../models/shipper');

const FindSalesOrderUseCase = require('../useCases/findSalesOrderUseCase');

class SalesOrderServiceFactory {

    constructor(connection) {
        this.salesOrderRepository = new SalesOrderRepository(
            connection,
            new Customer(),
            new Employee(),
            new Shipper()
        );
    }

    createSalesOrderController() {
        return new SalesOrderController(
            new FindSalesOrderUseCase(this.salesOrderRepository)
        );
    }
}

module.exports = SalesOrderServiceFactory;
