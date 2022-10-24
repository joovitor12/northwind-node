const { DataTypes } = require('sequelize')

class Supplier {
    _supplierModel
    connection

    constructor(connection) {
        this.connection = connection;
        this.createModel();
    }

    getModel() {
        return this._supplierModel
    }

    createModel() {
        this._supplierModel = this.connection
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
                    HomePage: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    }
                }, {
                    tableName: 'supplier',
                    createdAt: false,
                    updatedAt: false
                }
            )
    }
}

module.exports = Supplier;