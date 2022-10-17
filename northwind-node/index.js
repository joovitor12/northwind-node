const express = require('express')
const app = express()
const Database = require('./database/database')

app.get("/", (req, res) => {
    res.send("helou")
})

app.listen(8080, async () => {
    const database = new Database();
    await database.startConnection();
    await database.initDatabase();

    console.log('Project running on port 8080')
})
