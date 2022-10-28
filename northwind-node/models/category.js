const {DataTypes} = require('sequelize');

class Category {
    _categoryModel;

    getModel() {
        return this._categoryModel;
    }

    createModel(connection) {
        this._categoryModel = connection
            .define(
                'category',
                {
                    categoryId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    categoryName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        range: 40,
                    },
                    description: {
                        type: DataTypes.TEXT,
                        allowNull: true,
                    },
                    picture: {
                        type: DataTypes.BLOB,
                        allowNull: true,
                    },
                },
                {
                    tableName: 'category',
                    createdAt: false,
                    updatedAt: false,
                }
            );

        return this._categoryModel;
    }
}

module.exports = Category;



