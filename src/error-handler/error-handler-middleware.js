module.exports = (err, req, res, next) => {
    res.err = err;
    const { statusText, status = 500 } = err.response;
    const response = { message: statusText};

    if (status === 500) {
        response.message = 'Something went wrong.';
    }

    return res.status(status).send(response);
};
