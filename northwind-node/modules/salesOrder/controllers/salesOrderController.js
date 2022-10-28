class SalesOrderController {

    constructor(
        findSalesOrdersUseCase,
        findOrderDetailsUseCase,
        createSalesOrderUseCase,
        // deleteSalesOrderUseCase,
    ) {
        this.findSalesOrdersUseCase = findSalesOrdersUseCase;
        this.findOrderDetailsUseCase = findOrderDetailsUseCase;
        this.createSalesOrderUseCase = createSalesOrderUseCase;
        // this.deleteSalesOrderUseCase = deleteSalesOrderUseCase;
    }

    async find() {
        return await this.findSalesOrdersUseCase.execute();
    }

    async create(salesOrder) {
        return await this.createSalesOrderUseCase.execute(salesOrder);
    }

    async findAllOrderDetails(id) {
        return await this.findOrderDetailsUseCase.execute(id);
    }
    //
    // async delete(id) {
    //     return await this.deleteSalesOrderUseCase.execute(id);
    // }
}

module.exports = SalesOrderController;
