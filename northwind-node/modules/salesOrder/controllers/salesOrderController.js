const GenerateRelatoryUseCase = require("../useCases/generateRelatoryUseCase");

class SalesOrderController {

    constructor(
        findSalesOrdersUseCase,
        findOrderDetailsUseCase,
        createSalesOrderUseCase,
        generateRelatoryUseCase
        // deleteSalesOrderUseCase,
    ) {
        this.findSalesOrdersUseCase = findSalesOrdersUseCase;
        this.findOrderDetailsUseCase = findOrderDetailsUseCase;
        this.createSalesOrderUseCase = createSalesOrderUseCase;
        this.generateRelatoryUseCase = generateRelatoryUseCase;
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

    async generateRelatory(shipperId) {
        return await this.generateRelatoryUseCase.execute(shipperId);
    }

    //
    // async delete(id) {
    //     return await this.deleteSalesOrderUseCase.execute(id);
    // }
}

module.exports = SalesOrderController;
