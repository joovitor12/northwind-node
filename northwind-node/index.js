const express = require('express')
const app = express()
const conn = require('./database/database')
const Supplier = require('./models/supplier')
conn
    .authenticate()
    .then(() => {
        console.log("conexao feita");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

app.get("/", (req, res) => {
    res.send("helou")
})

app.listen(8080, () => {
    console.log('Project running on port 8080')
})