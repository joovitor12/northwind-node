const {DataTypes} = require('sequelize')
const Region = require('./region');

class Territory {
    _territoryModel;

    getModel() {
        return this._territoryModel
    }

    createModel(connection) {
        this._territoryModel = connection
            .define(
                'territory', {
                    territoryId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    territoryDescription: {
                        type: DataTypes.STRING,
                        range: 50,
                        allowNull: false
                    },
                    regionId: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    }
                }, {
                    tableName: "territory",
                    createdAt: false,
                    updatedAt: false
                }
            )

        const region = new Region();
        this._region = region.createModel(connection);

        this._territoryModel.hasOne(this._region, {
            constraints: true,
            foreignKey: 'regionId'
        });

        return this._territoryModel;
    }
}

module.exports = Territory;
