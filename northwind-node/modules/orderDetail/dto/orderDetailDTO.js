const ProductDTO = require('../../products/dto/productDTO');
const SalesOrderDTO = require('../../salesOrder/dto/salesOrderDTO');

class OrderDetailDTO {
    orderDetailId;
    orderId;
    productId;
    unitPrice;
    quantity;
    discount;

    constructor(
        orderDetailId,
        orderId,
        productId,
        unitPrice,
        quantity,
        discount,
    ) {
        this.orderDetailId = orderDetailId;
        this.orderId = orderId;
        this.productId = productId;
        this.employeeId = employeeId;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.discount = discount;
        this.shipperId = shipperId;
    }

    static toOrderDetailDTO(orderDetailModel) {
        const {
            orderDetailId,
            order,
            product,
            unitPrice,
            quantity,
            discount,
        } = orderDetailModel;

        return new OrderDetailDTO(
            orderDetailId,
            SalesOrderDTO.toSalesOrderDTO(order),
            ProductDTO.toProductDTO(product),
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


