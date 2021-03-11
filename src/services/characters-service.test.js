const { getAllCharactersId, getCharacterById } = require('./characters-service');
const { characterMock } = require('../util/mock-api');

describe('Character service', () => {
    beforeEach(() => {
        characterMock.mock.resetHandlers();
    });

    describe('getAllCharactersId', () => {
        const charactersMockResponse = {
            data: {
                data: {
                    results: [
                        {
                            id: 1234,
                        },
                        {
                            id: 3456,
                        },
                    ],
                },
            },
        };
        test('should return proper response from api', async() => {
            characterMock.getAllCharactersId({
                response: charactersMockResponse
            });
            const response = await getAllCharactersId();
            expect(response).toEqual(charactersMockResponse);
        });
    });

    describe('getCharacterById', () => {
        beforeEach(() => {
            characterMock.mock.resetHandlers();
        });
        const characterId = 1234;
        const characterMockResponse = {
            data: {
                data: {
                    results: [
                        {
                            id: 1234,
                            name: 'dummy-name',
                            description: 'dummy-description',
                        },
                    ],
                },
            },
        };
        test('should return proper response from api', async() => {
            characterMock.getCharacterById({
                response: characterMockResponse,
                params: {
                    characterId,
                }
            });
            const response = await getCharacterById(characterId);
            expect(response).toEqual(characterMockResponse);
        });

        test('should throw api error when marvel api fails', async() => {
            characterMock.getCharacterById({
                response: {
                    response: {
                        status: 404,
                    }
                },
                status: 404,
                params: {
                    characterId,
                }
            });
            await expect(getCharacterById(characterId)).rejects.toThrow(
                Error
            );
        });
    });
})
