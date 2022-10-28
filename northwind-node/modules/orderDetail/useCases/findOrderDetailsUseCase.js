const OrderDetailDTO = require('../dto/orderDetailDTO');
const NotFoundException = require('../../../errors/notFoundException');

class FindOrderDetailsUseCase {

    orderDetailRepository;

    constructor(orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }

    async execute(id) {
        const orderDetails = await this.orderDetailRepository.findAllById(id);

        if (orderDetails == null) {
            throw new NotFoundException('Order Detail');
        }

        const orderDetailDTO = OrderDetailDTO.manyToOrderDetailDTO(orderDetails);

        return orderDetailDTO;
    }
}

module.exports = FindOrderDetailsUseCase;
