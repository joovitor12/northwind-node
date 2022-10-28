const ShipDTO = require('../../shipper/dto/shipDTO');

class PurchaseDTO {
    custId;
    products;
    date;
    orderRequiredDate;
    shipperId;
    shippedDate;
    ship;
    employeeId;
    freight;
    discount;

    constructor(
        custId,
        products,
        date,
        orderRequiredDate,
        shipperId,
        ship,
        employeeId,
        freight,
        shippedDate,
        discount
    ) {
        this.custId = custId;
        this.products = products;
        this.date = date;
        this.orderRequiredDate = orderRequiredDate;
        this.shipperId = shipperId;
        this.ship = ship;
        this.employeeId = employeeId;
        this.freight = freight;
        this.shippedDate = shippedDate;
        this.discount = discount;
    }

    static toPurchaseDTO(salesOrderModel) {
        const {
            custId,
            products,
            date,
            orderRequiredDate,
            shipperId,
            ship,
            employeeId,
            freight,
            shippedDate,
            discount
        } = salesOrderModel;

        return new PurchaseDTO(
            custId,
            products,
            date,
            orderRequiredDate,
            shipperId,
            ShipDTO.toShipDTO(ship),
            employeeId,
            freight,
            shippedDate,
            discount
        )
    }
}

module.exports = PurchaseDTO;


