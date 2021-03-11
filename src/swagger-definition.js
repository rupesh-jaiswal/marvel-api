const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.json');

const useSchema = (schema) => (...args) => swaggerUi.setup(schema)(...args);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, useSchema(swaggerDocument));
    app.get('/api-docs.json', (req, res) => {
        res.send(swaggerDocument);
    });
};
