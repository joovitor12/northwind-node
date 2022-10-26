const { DataTypes } = require('sequelize')

class Employee {
    _employeeModel;
    connection;

    constructor(connection){
        this.connection = connection;
        this.createModel()
    }

    getModel(){
        return this._employeeModel
    }

    createModel(){
        this._employeeModel = this.connection
        .define(
            'employee', {
                employeeId: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                }, 
                lastname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                firstname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                }, 
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                titleOfCourtesy: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                birthDate: {
                    type: DataTypes.DATE,
                    allowNull: false
                },
                hireDate: {
                    type: DataTypes.DATE,
                    allowNull: false
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40 
                },
                city: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                region: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                postalCode: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                }, 
                country: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                phone: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                extension: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                mobile: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                },
                email: {
                    type: DataTypes.EMAIL,
                    allowNull: false
                },
                photo: {
                    type: DataTypes.BLOB,
                    allowNull: false
                },
                notes: {
                    type: DataTypes.BLOB,
                    allowNull: false
                },
                mgrId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                photoPath: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    range: 40
                }
            }, {
                tableName: 'employee',
                createdAt: false,
                updatedAt: false
            }
        )
    }
}

module.exports = Employee;