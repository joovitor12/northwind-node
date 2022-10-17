require('dotenv/config');

class DatabaseConnectionConsts {

    host;
    database;
    user;
    pass;
    dialect;

    constructor() {
        this.host = process.env.HOST;
        this.database = process.env.DATABASE;
        this.user = process.env.USER;
        this.pass = process.env.PASS;
        this.dialect = process.env.DIALECT;
    }

}

module.exports = DatabaseConnectionConsts;
