const OrderDetailsDTO = require('../dto/orderDetailDTO')

class createManyOrderDetailUseCase {

    orderDetailsRepository;

    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }

    async execute(createManyOrderDetailDTO) {
        const orderDetails = await this.orderDetailsRepository.createManyOrderDetails(createManyOrderDetailDTO);

        const orderDetailsDTO = OrderDetailsDTO.manyToOrderDetailDTO(orderDetails);

        return orderDetailsDTO;
    }
}

module.exports = createManyOrderDetailUseCase;
