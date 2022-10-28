const {DataTypes} = require('sequelize')

class CustomerDemographics {
    _customerDemographicsModel;

    getModel() {
        return this._customerDemographicsModel
    }

    createModel(connection) {
        this._customerDemographicsModel = connection
            .define(
                'customerdemographics', {
                    customerTypeId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    customerDesc: {
                        type: DataTypes.TEXT,
                        allowNull: false
                    }
                }, {
                    tableName: "customerdemographics",
                    createdAt: false,
                    updatedAt: false
                }
            )
    }
}

module.exports = CustomerDemographics;
