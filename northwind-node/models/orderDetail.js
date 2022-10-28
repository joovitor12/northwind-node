const {DataTypes} = require('sequelize');

const SalesOrder = require('./salesOrder');
const Product = require('./product');

class OrderDetail {
    _orderDetailModel;

    getModel() {
        return this._orderDetailModel
    }

    createModel(connection) {
        this._orderDetailModel = connection
            .define(
                'orderDetail', {
                    orderDetailId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    orderId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    productId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    unitPrice: {
                        type: DataTypes.DECIMAL,
                        precision: 10,
                        scale: 2,
                        allowNull: true
                    },
                    quantity: {
                        type: DataTypes.SMALLINT,
                        allowNull: true
                    },
                    discount: {
                        type: DataTypes.DECIMAL,
                        precision: 10,
                        scale: 2,
                        allowNull: true
                    },
                }, {
                    tableName: "orderDetail",
                    createdAt: false,
                    updatedAt: false
                }
            );

        const product = new Product();
        this._productModel = product.createModel(connection);

        const salesOrder = new SalesOrder();
        this._salesOrderModel = salesOrder.createModel(connection);

        this._orderDetailModel.belongsTo(this._productModel, {
            constraints: true,
            foreignKey: 'productId',
        });

        this._orderDetailModel.belongsTo(this._salesOrderModel, {
            constraints: true,
            foreignKey: 'orderId',
        });

        return this._orderDetailModel;
    }
}

module.exports = OrderDetail;
