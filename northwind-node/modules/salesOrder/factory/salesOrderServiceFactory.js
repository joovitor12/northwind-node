const SalesOrderRepository = require('../repositories/salesOrderRepository');
const SalesOrderController = require('../controllers/salesOrderController');

const Customer = require('../../../models/customers');
const Employee = require('../../../models/employee');
const Shipper = require('../../../models/shipper');
const SalesOrder = require('../../../models/salesOrder');
const Product = require('../../../models/product');

const OrderDetailRepository = require('../../orderDetail/repositories/orderDetailRepository')

const FindSalesOrderUseCase = require('../useCases/findSalesOrderUseCase');
const CreateSalesOrderUseCase = require('../useCases/createSalesOrderUseCase');
const CreateManyOrderDetailUseCase = require('../../orderDetail/useCases/createManyOrderDetailsUseCase');
const FindOrderDetailsUseCase = require('../../orderDetail/useCases/findOrderDetailsUseCase');
const GenerateRelatoryUseCase = require('../useCases/generateRelatoryUseCase');

class SalesOrderServiceFactory {

    constructor(connection) {
        this.salesOrderRepository = new SalesOrderRepository(
            connection,
            new Customer(),
            new Employee(),
            new Shipper()
        );

        this.orderDetailRepository = new OrderDetailRepository(
            connection,
            new SalesOrder(),
            new Product()
        )
    }

    createSalesOrderController() {
        return new SalesOrderController(
            new FindSalesOrderUseCase(this.salesOrderRepository),
            new FindOrderDetailsUseCase(this.orderDetailRepository),
            new CreateSalesOrderUseCase(this.salesOrderRepository,
                new CreateManyOrderDetailUseCase(this.orderDetailRepository)),
            new GenerateRelatoryUseCase(this.salesOrderRepository)
        );
    }
}

module.exports = SalesOrderServiceFactory;
