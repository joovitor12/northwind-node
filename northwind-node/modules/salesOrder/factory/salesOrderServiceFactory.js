const SalesOrderRepository = require('../repositories/salesOrderRepository');
const SalesOrderController = require('../controllers/salesOrderController');

const Customer = require('../../../models/customers');
const Employee = require('../../../models/employee');
const Shipper = require('../../../models/shipper');

const OrderDetailRepository = require('../repositories/orderDetailRepository')
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

    async createManyOrderDetails(custId, products, date, orderRequiredDate) {
        const products = []
        for (let i = 0; i < products.length; i++) {
            await products.push(await this.OrderDetailRepository.save(custId, products[i], date, orderRequiredDate))
        }
        return products
    }
}

module.exports = SalesOrderServiceFactory;

//custId, array de produtos, data de criacao da order, orderRequiredDate
// pra cada produto vou fazer um save em orderDetail