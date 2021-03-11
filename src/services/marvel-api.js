const qs = require('qs');
const crypto = require('crypto');
const marvelInstance = require('./marvel-instance-util');

const PublicApiKey = process.env.PUBLIC_API_KEY;
const TS = '1';
const PrivateKey = process.env.PRIVATE_API_KEY;

const postData = qs.stringify({
    ts: TS,
    apikey: PublicApiKey,
    hash: crypto.createHash('md5').update(`${TS}${PrivateKey}${PublicApiKey}`).digest("hex"),
});

const get = async(url) => {
    const { data } = await marvelInstance.get(`${url}?${postData}`);
    return data;
}

module.exports = {
    get
};
