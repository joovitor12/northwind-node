class CreateManyOrderDetailDTO {
    orderId;
    products;
    discount;

    constructor(
        orderId,
        products,
        unitPrice,
        quantity,
        discount,
    ) {
        this.orderId = orderId;
        this.products = products;
        this.employeeId = employeeId;
        this.discount = discount;
        this.shipperId = shipperId;
    }

    static toCreateManyOrderDetailDTO(orderDetailModel) {
        const {
            orderId,
            products,
            discount,
        } = orderDetailModel;

        return new CreateManyOrderDetailDTO(
            orderId,
            products,
            discount,
        )
    }
}

module.exports = CreateManyOrderDetailDTO;


