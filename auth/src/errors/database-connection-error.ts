export class DatabaseConnectionError extends Error {
    reason = "Error connecting to database";
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype); // Fixes bug for extending in-built-class
    }
}
