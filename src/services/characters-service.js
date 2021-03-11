const marvelApi = require('./marvel-api');

exports.getAllCharactersId = async() => {
    try {
        const data = await marvelApi.get('/characters');
        return data;
    }catch(err) {
        const { statusText, status } = err.response;
        console.log(`Request failed with ${status} : ${statusText}`);
        throw err;
    }
    
}

exports.getCharacterById = async(characterId) => {
    try {
        const data = await marvelApi.get(`/characters/${characterId}`);
        return data;
    }catch(err) {
        const { statusText, status } = err.response;
        console.log(`Request failed with ${status} : ${statusText}`);
        throw err;
    }
}
