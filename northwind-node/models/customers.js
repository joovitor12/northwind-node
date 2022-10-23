const { DataTypes } = require('sequelize');

class Customer {
    _customerModel;
    connection;

    constructor(connection) {
        this.connection = connection;
        this.createModel();
    }

    getModel() {
        return this._customerModel;
    }

    createModel() {
        this._customerModel = this.connection
            .define(
                'customer', {
                    customerId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    companyName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    contactName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    contactTitle: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    address: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    city: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    region: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    postalCode: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    country: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    phone: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    },
                    fax: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40
                    }

                }, {
                    tableName: 'customer',
                    createdAt: false,
                    updatedAt: false
                }
            )
    }
}

module.exports = Customer;