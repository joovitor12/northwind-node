const express = require('express')
const Database = require('./database/database')
const cors = require('cors')
const Router = require('./routes')

class App {

    app;

    constructor()  {
        this.app = express();

        const database = new Database();
        database.startConnection();
        database.initDatabase();

        const router = new Router(database)

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(router.getRoutes());
    }

    getApp() {
        return this.app;
    }
}

module.exports = App;
