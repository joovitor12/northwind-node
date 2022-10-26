const {DataTypes} = require('sequelize')

class Shipper {
    _shipperModel;

    getModel() {
        return this._shipperModel
    }

    createModel(connection) {
        this._shipperModel = connection
            .define(
                'shipper', {
                    shipperId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    companyName: {
                        type: DataTypes.STRING,
                        range: 40,
                        allowNull: false
                    },
                    phone: {
                        type: DataTypes.STRING,
                        range: 44,
                        allowNull: true
                    }
                }, {
                    tableName: "shipper",
                    createdAt: false,
                    updatedAt: false
                }
            );

        return this._shipperModel;
    }
}

module.exports = Shipper;
