const {DataTypes} = require('sequelize');
const Supplier = require('./supplier');
const Category = require('./category');

class Product {
    _productModel;

    getModel() {
        return this._productModel;
    }

    createModel(connection) {
        this._productModel = connection
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
            );

        const supplier = new Supplier();
        this._supplierModel = supplier.createModel(connection);

        const category = new Category();
        this._categoryModel = category.createModel(connection);

        this._productModel.belongsTo(this._supplierModel, {
            constraints: true,
            foreignKey: 'supplierId',
        });

        this._supplierModel.hasMany(this._productModel, {
            foreignKey: 'supplierId',
        });

        this._productModel.belongsTo(this._categoryModel, {
            constraints: true,
            foreignKey: 'categoryId',
        });

        this._categoryModel.hasMany(this._productModel, {
            foreignKey: 'categoryId',
        });

        return this._productModel;
    }
}

module.exports = Product;



