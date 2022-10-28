const {DataTypes} = require('sequelize')

class Supplier {
    _supplierModel

    getModel() {
        return this._supplierModel
    }

    createModel(connection) {
        this._supplierModel = connection
            .define(
                'supplier', {
                    supplierId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    companyName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    contactName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    contactTitle: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    address: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    city: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    region: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    postalCode: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    country: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    phone: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    email: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    fax: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    homePage: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    }
                }, {
                    tableName: 'supplier',
                    createdAt: false,
                    updatedAt: false
                }
            );

            return this._supplierModel;
    }
}

module.exports = Supplier;
