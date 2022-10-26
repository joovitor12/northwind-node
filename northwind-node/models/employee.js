const {DataTypes} = require('sequelize')
const Region = require("./region");

const Employeeterritory = require("./employeeterritory");

class Employee {
    _employeeModel;

    getModel() {
        return this._employeeModel
    }

    createModel(connection) {
        this._employeeModel = connection
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
            );


        const region = new Region();
        this._region = region.createModel(connection);

        const employeeterritory = new Employeeterritory();
        this._employeeterritory = employeeterritory.createModel(connection);

        this._employeeModel.belongsToMany(this._region, {
            through: {
                model: this._employeeterritory
            }
        });

        return this._employeeModel;
    }
}

module.exports = Employee;
