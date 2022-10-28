class GenerateRelatoryUseCase {

    salesOrderRepository;

    constructor(salesOrderRepository) {
        this.salesOrderRepository = salesOrderRepository;
    }

    async execute(shipperId) {
        const relatory = await this.salesOrderRepository.generateRelatory(shipperId);

        return relatory;
    }
}

module.exports = GenerateRelatoryUseCase;
