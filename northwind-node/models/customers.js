const { DataTypes } = require('sequelize');

class Customer {
    _customerModel;

    getModel() {
        return this._customerModel;
    }

    createModel(connection) {
        this._customerModel =connection
            .define(
                'customer', {
                    custId: {
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
            );

        return this._customerModel;
    }
}

module.exports = Customer;
