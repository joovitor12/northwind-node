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
}


module.exports = OrderDetailRepository;
