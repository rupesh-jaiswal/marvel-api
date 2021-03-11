const qs = require('qs');
const crypto = require('crypto');
const applyMock = require('./apply-mock');
const { mock } = require('./marvel-mock');

const PublicApiKey = process.env.PUBLIC_API_KEY;
const TS = '1';
const PrivateKey = process.env.PRIVATE_API_KEY;

const postData = qs.stringify({
    ts: TS,
    apikey: PublicApiKey,
    hash: crypto.createHash('md5').update(`${TS}${PrivateKey}${PublicApiKey}`).digest("hex"),
});
const BASE_URL = 'https://gateway.marvel.com/v1/public'

exports.mock = mock;

exports.getAllCharactersId = ({
    status,
    response,
} = {}) => {
    applyMock(
        {
            method: 'get',
            route: `/characters?${postData}`,
            status: status || 200,
            response: response,
        },
        mock
    );
};
exports.getCharacterById = ({
    params: { characterId },
    status,
    response,
}) => {
    applyMock(
        {
            method: 'get',
            route: `/characters/${encodeURIComponent(characterId)}?${postData}`,
            status: status || 200,
            response,
        },
        mock
    );
};

