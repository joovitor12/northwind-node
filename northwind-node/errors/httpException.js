class HttpException extends Error {
    constructor(statusCode, message, response) {
        super(message);

        this.statusCode = statusCode;
        this.response = response;
    }
}

module.exports = HttpException;
