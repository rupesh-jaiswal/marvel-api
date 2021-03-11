const express = require('express');
const charactersController = require('../controllers/characters-controller');

const charactersRouter = express.Router();

charactersRouter
    .route('/')
    .get(charactersController.getAllCharactersId);

charactersRouter
    .route('/:characterId')
    .get(charactersController.getCharacterById);

module.exports = charactersRouter;
