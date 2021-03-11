const axios = require('axios');

const BASE_URL = 'https://gateway.marvel.com/v1/public'

const marvelInstance = axios.create({
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    baseURL: BASE_URL,
});

module.exports = marvelInstance;
