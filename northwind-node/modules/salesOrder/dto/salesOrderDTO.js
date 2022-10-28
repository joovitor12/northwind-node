const EmployeeDTO = require('../../employee/dto/employeeDTO');
const ShipperDTO = require('../../shipper/dto/shipperDTO');

class SalesOrderDTO {
    orderId;
    custId;
    employeeId;
    orderDate;
    requiredDate;
    shippedDate;
    shipperId;
    freight;
    shipName;
    shipAddress;
    shipCity;
    shipRegion;
    shipPostalCode;
    shipCountry;

    constructor(
        orderId,
        custId,
        employeeId,
        orderDate,
        requiredDate,
        shippedDate,
        shipperId,
        freight,
        shipName,
        shipAddress,
        shipCity,
        shipRegion,
        shipPostalCode,
        shipCountry
    ) {
        this.orderId = orderId;
        this.custId = custId;
        this.employeeId = employeeId;
        this.orderDate = orderDate;
        this.requiredDate = requiredDate;
        this.shippedDate = shippedDate;
        this.shipperId = shipperId;
        this.freight = freight;
        this.shipName = shipName;
        this.shipAddress = shipAddress;
        this.shipCity = shipCity;
        this.shipRegion = shipRegion;
        this.shipPostalCode = shipPostalCode;
        this.shipCountry = shipCountry;
    }

    static toSalesOrderDTO(salesOrderModel) {
        const {
            orderId,
            custId,
            employeeId,
            orderDate,
            requiredDate,
            shippedDate,
            shipperId,
            freight,
            shipName,
            shipAddress,
            shipCity,
            shipRegion,
            shipPostalCode,
            shipCountry
        } = salesOrderModel;

        return new SalesOrderDTO(
            orderId,
            custId,
            employeeId != null ? employeeId : null,
            orderDate,
            requiredDate,
            shippedDate,
            shipperId != null ? shipperId : null,
            freight,
            shipName,
            shipAddress,
            shipCity,
            shipRegion,
            shipPostalCode,
            shipCountry,
        )
    }

    static manyToSalesOrderDTO(salesOrdersModel) {
        const salesOrdersDTO = [];
        for (let iterator = 0; iterator < salesOrdersModel.length; iterator++) {
            salesOrdersDTO.push(SalesOrderDTO.toSalesOrderDTO(salesOrdersModel[iterator]));
        }

        return salesOrdersDTO;
    }
}

module.exports = SalesOrderDTO;


