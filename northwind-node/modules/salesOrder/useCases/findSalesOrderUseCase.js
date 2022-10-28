const SalesOrderDTO = require('../dto/salesOrderDTO')

class FindSalesOrdersUseCase {

    salesOrderRepository;

    constructor(salesOrderRepository) {
        this.salesOrderRepository = salesOrderRepository;
    }

    async execute() {
        const salesOrders = await this.salesOrderRepository.findWithRelations();

        const salesOrderDTO = SalesOrderDTO.manyToSalesOrderDTO(salesOrders);

        return salesOrderDTO;
    }
}

module.exports = FindSalesOrdersUseCase;
