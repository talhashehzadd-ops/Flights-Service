class AppError extends Error {                      // Apperror class that extends the builtin Error class in javascript
    constructor (message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.explanation = message;
    }
}

module.exports = AppError;