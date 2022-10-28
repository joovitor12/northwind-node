class SalesOrderController {

    constructor(
        findSalesOrdersUseCase,
        // findSalesOrderUseCase,
        createSalesOrderUseCase,
        // deleteSalesOrderUseCase,
    ) {
        this.findSalesOrdersUseCase = findSalesOrdersUseCase;
        // this.findSalesOrderUseCase = findSalesOrderUseCase;
        this.createSalesOrderUseCase = createSalesOrderUseCase;
        // this.deleteSalesOrderUseCase = deleteSalesOrderUseCase;
    }

    async find() {
        return await this.findSalesOrdersUseCase.execute();
    }

    async create(salesOrder) {
        return await this.createSalesOrderUseCase.execute(salesOrder);
    }
    //
    // async findOne(id) {
    //     return await this.findSalesOrderUseCase.execute(id);
    // }
    //
    // async delete(id) {
    //     return await this.deleteSalesOrderUseCase.execute(id);
    // }
}

module.exports = SalesOrderController;
