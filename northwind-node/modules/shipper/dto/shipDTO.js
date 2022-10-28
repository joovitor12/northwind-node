class ShipDTO {
    shipName;
    shipAddress;
    shipCity;
    shipRegion;
    shipPostalCode;
    shipCountry;

    constructor(
        shipName,
        shipAddress,
        shipCity,
        shipRegion,
        shipPostalCode,
        shipCountry,
    ) {
        this.shipName = shipName;
        this.shipAddress = shipAddress;
        this.shipCity = shipCity;
        this.shipRegion = shipRegion;
        this.shipPostalCode = shipPostalCode;
        this.shipCountry = shipCountry;
    }

    static toShipDTO(shipModel) {
        const {
            shipName,
            shipAddress,
            shipCity,
            shipRegion,
            shipPostalCode,
            shipCountry,
        } = shipModel;

        return new ShipDTO(
            shipName,
            shipAddress,
            shipCity,
            shipRegion,
            shipPostalCode,
            shipCountry,
        )
    }
}

module.exports = ShipDTO;
