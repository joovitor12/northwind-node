class DatabaseUnavailable extends Error {
    constructor() {
        super("Error ao conectar a base de dados");
    }

}

module.exports = DatabaseUnavailable;
