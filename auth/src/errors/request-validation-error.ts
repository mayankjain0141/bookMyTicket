import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
export class RequestValidationError extends CustomError {
    // errors: ValidationError[];
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super("Invalid request parameters");
        // this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype); // Fixes bug for extending in-built-class
    }

    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.param };
        });
    }
}
