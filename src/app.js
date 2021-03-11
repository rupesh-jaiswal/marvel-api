const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');
const RootRoutes = require('./routers/root-routes');

module.exports = () => {
    const app = express();

    require('./swagger-definition')(app);
    app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(
        RootRoutes.CHARACTER_ROOT,
        require('./routers/character-router')
    )
    .use(errorHandler);
    return app;
};
