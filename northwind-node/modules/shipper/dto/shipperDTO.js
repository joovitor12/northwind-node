const SupplierDTO = require("../../supplier/DTO/supplierDTO");
const CategoryDTO = require("../../category/DTO/categoryDTO");

class ShipperDTO {
    shipperId;
    companyName;
    phone;

    constructor(
        shipperId,
        companyName,
        phone,
    ) {
        this.shipperId = shipperId;
        this.companyName = companyName;
        this.phone = phone;
    }

    static toShipperDTO(shipperModel) {
        const {
            shipperId,
            companyName,
            phone,
        } = shipperModel;

        return new ShipperDTO(
            shipperId,
            companyName,
            phone,
        )
    }

    static manyToShipperDTO(shippersModel) {
        const shippersDTO = [];
        for (let iterator = 0; iterator < shippersModel.length; iterator++) {
            shippersDTO.push(ShipperDTO.toShipperDTO(shippersModel[iterator]));
        }

        return shippersDTO;
    }
}

module.exports = ShipperDTO;
