const {DataTypes} = require('sequelize');

const Customer = require('./customers');
const Employee = require('./employee');
const Shipper = require('./shipper');

class SalesOrder {
    _salesOrderModel;

    getModel() {
        return this._salesOrderModel
    }

    createModel(connection) {
        this._salesOrderModel = connection
            .define(
                'salesOrder', {
                    orderId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    custId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    employeeId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    orderDate: {
                        type: DataTypes.DATE,
                        allowNull: true
                    },
                    requiredDate: {
                        type: DataTypes.DATE,
                        allowNull: true
                    },
                    shippedDate: {
                        type: DataTypes.DATE,
                        allowNull: true
                    },
                    shipperId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    freight: {
                        type: DataTypes.DECIMAL,
                        precision: 10,
                        scale: 2,
                        allowNull: true
                    },
                    shipName: {
                        type: DataTypes.STRING,
                        range: 40,
                        allowNull: true
                    },
                    shipAddress: {
                        type: DataTypes.STRING,
                        range: 60,
                        allowNull: true
                    },
                    shipCity: {
                        type: DataTypes.STRING,
                        range: 15,
                        allowNull: true
                    },
                    shipRegion: {
                        type: DataTypes.STRING,
                        range: 15,
                        allowNull: true
                    },
                    shipPostaCode: {
                        type: DataTypes.STRING,
                        range: 10,
                        allowNull: true
                    },
                    shipCountry: {
                        type: DataTypes.STRING,
                        range: 15,
                        allowNull: true
                    },
                }, {
                    tableName: "salesOrder",
                    createdAt: false,
                    updatedAt: false
                }
            );

        const customer = new Customer();
        this._customerModel = customer.createModel(connection);

        const employee = new Employee();
        this._employeeModel = employee.createModel(connection);

        const shipper = new Shipper();
        this._shipperModel = shipper.createModel(connection);

        this._salesOrderModel.belongsTo(this._customerModel, {
            constraints: true,
            foreignKey: 'custId',
        });

        this._salesOrderModel.belongsTo(this._employeeModel, {
            constraints: true,
            foreignKey: 'employeeId',
        });

        this._salesOrderModel.belongsTo(this._shipperModel, {
            constraints: true,
            foreignKey: 'shipperId',
        });

        return this._salesOrderModel;
    }
}

module.exports = SalesOrder;
