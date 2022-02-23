import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
    // errors: ValidationError[];
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super();
        // this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype); // Fixes bug for extending in-built-class
    }

    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.param };
        });
    }
}
