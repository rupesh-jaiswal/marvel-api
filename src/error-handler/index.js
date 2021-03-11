const ErrorHandlerMiddleware = require('./error-handler-middleware');
const ErrorHandlerErrors = require('./error-handler-errors');

module.exports = Object.assign(ErrorHandlerMiddleware, ErrorHandlerErrors);
