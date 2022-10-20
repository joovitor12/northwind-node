const Sequelize = require('sequelize');
const DatabaseConnectionConsts = require('../configs/consts/databaseConnection');

const ProductDTO = require('../modules/products/dto/productDTO');
const ProductRepository = require('../modules/products/repositories/productRepository');

class Database {

    _connection;
    productRepository;

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
            console.log(error);
        }
    }

    initDatabase() {
        this.producRepository = new ProductRepository(this.getConnection());
    }

    getProducRepository() {
        return this.producRepository;
    }
}

module.exports = Database;
