const { DataTypes } = require('sequelize')

class CustomerDemographics {
    _customerDemographicsModel;
    connection;

    constructor(connection){
        this.connection = connection
        this.createModel()
    }

    getModel(){
        return this._customerDemographicsModel
    }

    createModel(){
        this._customerDemographicsModel = this.connection
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