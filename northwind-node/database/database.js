const Sequelize = require('sequelize');
const DatabaseUnavailable = require('../errors/DatabaseUnavailable');
const DatabaseConnectionConsts = require('../configs/consts/databaseConnection');

class Database {

    constructor() {
        const {database, host, dialect, pass, user} = new DatabaseConnectionConsts();

        this._connection = new Sequelize(
            database,
            user,
            pass,
            {
                host,
                dialect
            });
    }

    getConnection() {
        return this._connection;
    }

    async startConnection() {
        try {
            await this._connection.authenticate();
            console.log("Database Connected");
        } catch (error) {
            throw new DatabaseUnavailable();
        }
    }
}

module.exports = Database;
