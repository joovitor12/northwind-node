const Sequelize = require('sequelize');
const DatabaseConnectionConsts = require('../configs/consts/databaseConnection');

const ProductDTO = require('../DTO/productDTO');
const ProductRepository = require('../repositories/productRepository');

class Database {

    _connection;

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
            const result = await this._connection.authenticate();
            console.log("() => Connected <= ()");
        } catch (error) {
            console.log(error);
        }
    }

    async initDatabase() {
        const productRepoistory = new ProductRepository(this.getConnection());
        const products = await productRepoistory.find();

        const productDTO = ProductDTO.toProductDTO(products[0]);
        // const productModel = new Product(this.getConnection());
        //
        // const products = await productModel.instance().findAll();

        console.log(productDTO);
    }
}

module.exports = Database;
