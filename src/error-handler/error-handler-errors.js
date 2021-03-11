module.exports.RuntimeError = class RuntimeError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
        this.name = 'RuntimeError';
    }
};

module.exports.ClientInputError = class ClientInputError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
        this.name = 'ClientInputError';
    }
};

module.exports.NotFoundError = class NotFoundError extends Error {
    constructor(message) {
        super(message || 'Not found');
        this.status = 404;
        this.name = 'NotFoundError';
    }
};

module.exports.NotAuthorizedError = class NotAuthorizedError extends Error {
    constructor(message) {
        super(message || 'Authorization request header is missing or invalid');
        this.status = 401;
        this.name = 'NotAuthorizedError';
    }
};

module.exports.AxiosError = class AxiosError extends Error {
    constructor(err) {
        const message =
            err.response &&
            err.response.data &&
            (err.response.data.message || err.response.data.detail)
                ? err.response.data.message || err.response.data.detail
                : err.message;

        const status = err.response ? err.response.status : undefined;

        super(message);

        this.status = status;
        this.name = 'AxiosError';
    }
};

module.exports.ForbiddenError = class ForbiddenError extends Error {
    constructor(message) {
        super(message || 'Access not allowed for this resource');
        this.status = 403;
        this.name = 'ForbiddenError';
    }
};

module.exports.ConflictError = class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.status = 409;
        this.name = 'ConflictError';
    }
};
