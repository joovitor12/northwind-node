const {DataTypes} = require('sequelize');

class Product {
    _product;
    connection;

    constructor(connection) {
        this.connection = connection;
        this.createModel();
    }

    instance() {
        return this._product;
    }

    createModel() {
        this._product = this.connection
            .define(
                'product',
                {
                    productId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    productName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    supplierId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    categoryId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    quantityPerUnit: {
                        type: DataTypes.STRING,
                        range: 20,
                        allowNull: true,
                    },
                    unitPrice: {
                        type: DataTypes.DECIMAL,
                        precision: 10,
                        scale: 2,
                        allowNull: true,
                    },
                    unitsInStock: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                    },
                    unitsOnOrder: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                    },
                    reorderLevel: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                    },
                    discontinued: {
                        type: DataTypes.CHAR,
                        range: 1,
                        allowNull: false,
                    },
                },
                {
                    tableName: 'product',
                    createdAt: false,
                    updatedAt: false,
                }
            )
        ;
    }
}

module.exports = Product;



