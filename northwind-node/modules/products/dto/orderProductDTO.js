class OrderProductDTO {
    productId;
    unitPrice;
    quantity;

    constructor(
        productId,
        unitPrice,
        quantity,
    ) {
        this.productId = productId;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    static toOrderProductDTO(productModel) {
        const {
            productId,
            unitPrice,
            quantity,
        } = productModel;

        return new OrderProductDTO(
            productId,
            unitPrice,
            quantity,
        )
    }
}

module.exports = OrderProductDTO;


