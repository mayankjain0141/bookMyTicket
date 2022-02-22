import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
    errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super();
        this.errors = errors;

        Object.setPrototypeOf(this, RequestValidationError.prototype); // Fixes bug for extending in-built-class
    }
}
