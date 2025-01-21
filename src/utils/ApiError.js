class ApiError extends Error{
    constructor(
        statusCode ,
        message="Something went wrong",
        error=[],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = error;
        this.stack = stack;
        this.data = null;
        this.message = message;
        this.success = false;
    }
}

export {ApiError}