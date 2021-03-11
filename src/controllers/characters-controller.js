const cache = require('memory-cache');
const charactersService = require('../services/characters-service');

exports.getAllCharactersId = async (req, res, next) => {
    try {
        const cachedValue = cache.get('characters');
        if(cachedValue) {
            res.json(cachedValue);
        }else {
            const { data: { results } } = await charactersService.getAllCharactersId();
            const characterIds = results.map(({id}) => id);
            cache.put('characters', characterIds);
            res.json(characterIds);
        }
        
    }catch(err) {
        next(err);
    }
};


exports.getCharacterById = async(req, res, next) => {
    try {
        const { characterId } = req.params;
        const cachedValue = cache.get(characterId);
        if(cachedValue) {
            res.json(cachedValue);
        }else {
            const { data: { results } = {} } = await charactersService.getCharacterById(characterId);
            const [{ id, name, description }] = results;
            const response = {
                    id,
                    name,
                    description,
                };
            cache.put(characterId, response);
            res.json(response);
        }
    }catch(err) {
        next(err);
    }
};
