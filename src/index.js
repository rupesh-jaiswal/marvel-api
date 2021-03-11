const path = require('path');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    const envPath = path.join(`${__dirname}`, '..', '.env');
    dotenv.config({
        path: envPath,
    });
}
try {
    const app = require('./app')();

    const port = parseInt(process.env.API_PORT, 10) || 8080;
    app.listen(port, () => {
        console.log('server started on port 8080');
    });
} catch (err) {
    console.log('could not start servcer', err);
}
