const MockAdapter = require('axios-mock-adapter');
const axiosInstance = require('../../services/marvel-instance-util');

const mock = new MockAdapter(axiosInstance);

exports.mock = mock;
