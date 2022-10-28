const {DataTypes} = require('sequelize')

class Region {
    _regionModel;

    getModel() {
        return this._regionModel
    }

    createModel(connection) {
        this._regionModel = connection
            .define(
                'region', {
                    regionId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    regionDescription: {
                        type: DataTypes.STRING,
                        range: 50,
                        allowNull: false
                    }
                }, {
                    tableName: "region",
                    createdAt: false,
                    updatedAt: false
                }
            );

        return this._regionModel;
    }
}

module.exports = Region;
