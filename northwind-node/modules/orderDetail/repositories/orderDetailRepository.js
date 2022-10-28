const Repository = require('../../../configs/implementations/Repository');
const OrderDetail = require("../../../models/orderDetail");

class OrderDetailRepository extends Repository {

    repository;

    constructor(connection, salesOrderModel, productModel) {
        const orderDetailModel = new OrderDetail();
        orderDetailModel.createModel(connection);
        super(orderDetailModel);
        this.repository = orderDetailModel.getModel();

        this.salesOrderModel = salesOrderModel.createModel(connection);
        this.productModel = productModel.createModel(connection);
    }

    async findAllById(id) {
        const orderDetails = await this.repository.findAll({
            where: {
                orderId: id
            },
            include: [
                this.salesOrderModel,
                this.productModel
            ]
        });

        return orderDetails;
    }

    createManyOrderDetails(createManyOrderDetailDTO) {
        return Promise.all(createManyOrderDetailDTO.product.map(this.createOrder(createManyOrderDetailDTO)))
    }

    createOrder(createManyOrderDetailDTO) {
        return (product) => {
            return this.repository.create({
                ...createManyOrderDetailDTO,
                productId: product.productId,
                unitPrice: product.unitPrice,
                quantity: product.quantity
            });
        }
    }
}


module.exports = OrderDetailRepository;
