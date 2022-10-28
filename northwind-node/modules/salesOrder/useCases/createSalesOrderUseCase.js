const SalesOrderDTO = require('../dto/salesOrderDTO')

class createSalesOrdersUseCase {

    salesOrderRepository;

    constructor(salesOrderRepository, createOrderDetailUseCase) {
        this.salesOrderRepository = salesOrderRepository;
        this.createManyOrderDetailUseCase = createOrderDetailUseCase;
    }

    async execute(purchaseDTO) {
        const {products: _, ...salesOrderToSaveDTO} = purchaseDTO
        const {ship, ...salesOrderInformationDTO} = salesOrderToSaveDTO;
        const createSalesOrderDTO = {
            ...salesOrderInformationDTO,
            shipName: ship.shipName,
            shipAddress: ship.shipAddress,
            shipCity: ship.shipCity,
            shipRegion: ship.shipRegion,
            shipPostalCode: ship.shipPostalCode,
            shipCountry: ship.shipCountry,
        };

        const salesOrder = await this.salesOrderRepository.save(createSalesOrderDTO);

        const salesOrderDTO = SalesOrderDTO.toSalesOrderDTO(salesOrder);

        const orderDetailsDTO = await this.createManyOrderDetailUseCase.execute({
            orderId: salesOrderDTO.orderId,
            product: purchaseDTO.products,
            discount: purchaseDTO.discount
        });

        return {salesOrderDTO, orderDetailsDTO};
    }
}

module.exports = createSalesOrdersUseCase;
