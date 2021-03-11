const httpMocks = require('node-mocks-http');
const { getAllCharactersId, getCharacterById } = require('./characters-controller');
const charactersService = require('../services/characters-service');
const { NotFoundError } = require('../error-handler');

describe('Character controller', () => {
    test('getAllCharactersId should forward response with correct structure from service on success', async () => {
        jest.spyOn(charactersService, 'getAllCharactersId').mockImplementation(() => {
            return {
                data: {
                    results: [
                        {
                            id: 1234,
                        }
                    ]
                }
            }
        });

        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn((err) => console.log(err));

        await getAllCharactersId(req, res, next);

        expect.assertions(3);
        expect(res.finished).toBe(true);

        const body = res._getJSONData();
        expect(body).toMatchObject([1234]);
        expect(next).toBeCalledTimes(0);
    });

    test('getAllCharactersId should forward error from service', async () => {
        jest.spyOn(charactersService, 'getAllCharactersId').mockImplementation(() => {
            throw new NotFoundError();
        });

        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn((err) => expect(err).toBeInstanceOf(NotFoundError));

        await getAllCharactersId(req, res, next);

        expect(res.finished).toBe(false);

        expect(next).toBeCalledTimes(1);
    });

    test('getCharacterById should forward response with correct structure from service on success', async () => {
        jest.spyOn(charactersService, 'getCharacterById').mockImplementation(() => {
            return {
                data: {
                    results: [
                        {
                            id: 1234,
                            name: 'dummy-name',
                            description: 'dummy-description'
                        }
                    ]
                }
            }
        });

        const req = httpMocks.createRequest({
            params: {
                characterId: 1234,
            }
        });
        const res = httpMocks.createResponse();
        const next = jest.fn((err) => console.log(err));

        await getCharacterById(req, res, next);

        expect.assertions(3);
        expect(res.finished).toBe(true);

        const body = res._getJSONData();
        expect(body).toMatchObject({
            id: 1234,
            name: 'dummy-name',
            description: 'dummy-description'
        });
        expect(next).toBeCalledTimes(0);
    });

    test('getCharacterById should forward error from service', async () => {
        jest.spyOn(charactersService, 'getCharacterById').mockImplementation(() => {
            throw new NotFoundError();
        });

        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn((err) => expect(err).toBeInstanceOf(NotFoundError));

        await getCharacterById(req, res, next);

        expect(res.finished).toBe(false);

        expect(next).toBeCalledTimes(1);
    });
});
