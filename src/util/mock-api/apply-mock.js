const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 *
 * @param {Object} config
 * @param {string} config.method - HTTP method
 * @param {string} config.route - HTTP route
 * @param {object} config.data - HTTP data to be passed to axios. eg: { params: { id: 1 }} / { query: { id: 1 }} / { id: 1 }
 * @param {number} config.status - HTTP status code
 * @param {*} config.response - The response that will be retuned from the mocked request
 */
module.exports = function applyMock(
    { method, route, headers, data, status, response },
    mock
) {
    const onMethod = `on${capitalize(method.toLowerCase())}`;
    mock[onMethod](route, data, headers ? { headers } : undefined).reply(() => [
        status,
        response,
    ]);
};
