const { DataTypes } = require('sequelize')

class CustCustDemographics {
    _custCustDemographicsModel
    connection

    constructor(connection){
        this.connection = connection
        this.createModel()
    }

    getModel(){
        return this._custCustDemographicsModel
    }

    createModel() {
        this._custCustDemographicsModel = this.connection
        .define(
            'custcustdemographics', {
                custId: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull:false,
                    autoIncrement: true
                },
                customerTypeId: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull:false,
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