const {DataTypes} = require('sequelize')
const Region = require("./region");

class EmployeeTerritory {
    _employeeTerritory


    getModel() {
        return this._employeeTerritory
    }

    createModel(connection) {
        this._employeeTerritory = connection
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
            );

        return this._employeeTerritory;
    }
}

module.exports = EmployeeTerritory
