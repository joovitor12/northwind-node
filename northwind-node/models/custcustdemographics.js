const {DataTypes} = require('sequelize')

class CustCustDemographics {
    _custCustDemographicsModel


    getModel() {
        return this._custCustDemographicsModel
    }

    createModel(connection) {
        this._custCustDemographicsModel = connection
            .define(
                'custcustdemographics', {
                    custId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    },
                    customerTypeId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true
                    }
                }, {
                    tableName: 'custcustdemographics',
                    createdAt: false,
                    updatedAt: false
                }
            )
    }
}

module.exports = CustCustDemographics;
