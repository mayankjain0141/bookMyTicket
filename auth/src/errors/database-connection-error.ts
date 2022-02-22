export class DatabaseConnectionError extends Error {
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype); // Fixes bug for extending in-built-class
    }
}
