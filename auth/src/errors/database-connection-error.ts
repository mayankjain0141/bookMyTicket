export class DatabaseConnectionError extends Error {
    statusCode = 500;
    reason = "Error connecting to database";
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype); // Fixes bug for extending in-built-class
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}
