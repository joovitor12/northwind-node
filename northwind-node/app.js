const express = require('express');
const Database = require('./database/database');
const cors = require('cors');
const Router = require('./routes');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');
require('express-async-errors');

class App {

    constructor() {
        this.app = express();
        this.initProject();
    }

    async initProject() {
        const router = new Router(await this.initDatabase());

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(router.getRoutes());
        this.app.use(new ErrorMiddleware().handle);
    }

    async initDatabase() {
        const database = new Database();
        await database.startConnection();
        return database;
    }

    getApp() {
        return this.app;
    }
}

module.exports = App;
