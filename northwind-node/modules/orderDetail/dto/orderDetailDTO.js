const ProductDTO = require('../../products/dto/productDTO');
const SalesOrderDTO = require('../../salesOrder/dto/salesOrderDTO');

class OrderDetailDTO {
    orderDetailId;
    orderId;
    order;
    productId;
    product;
    unitPrice;
    quantity;
    discount;

    constructor(
        orderDetailId,
        orderId,
        order,
        productId,
        product,
        unitPrice,
        quantity,
        discount,
    ) {
        this.orderDetailId = orderDetailId;
        this.orderId = orderId;
        this.order = order;
        this.productId = productId;
        this.product = product;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.discount = discount;
    }

    static toOrderDetailDTO(orderDetailModel) {
        const {
            orderDetailId,
            orderId,
            productId,
            order,
            product,
            unitPrice,
            quantity,
            discount,
        } = orderDetailModel;

        return new OrderDetailDTO(
            orderDetailId,
            orderId != null ? orderId : null,
            productId != null ? productId : null,
            order != null ? SalesOrderDTO.toSalesOrderDTO(order) : null,
            product != null ? ProductDTO.toProductDTO(product) : null,
            unitPrice,
            quantity,
            discount,
        )
    }

    static manyToOrderDetailDTO(orderDetailsModel) {
        const orderDetailsDTO = [];
        for (let iterator = 0; iterator < orderDetailsModel.length; iterator++) {
            orderDetailsDTO.push(OrderDetailDTO.toOrderDetailDTO(orderDetailsModel[iterator]));
        }

        return orderDetailsDTO;
    }
}

module.exports = OrderDetailDTO;


