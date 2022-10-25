const { DataTypes } = require('sequelize')

class EmployeeTerritory {
    _employeeTerritory
    connection

    constructor(connection){
        this.connection = connection
        this.createModel()
    }

    getModel(){
        return this._employeeTerritory
    }

    createModel(){
        this._employeeTerritory = this.connection
        .define(
            'employeeterritory', {
                employeeId: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                }, 
                territoryId: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    allowNull: false
                }
            }, {
                tableName: 'employeeterritory',
                createdAt: false,
                updatedAt: false
            }
        )
    }
}

module.exports = EmployeeTerritory