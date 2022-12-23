const { Router } = require('express');

const { createTag, getTags, getTag, updateTag, deleteTag } = require('../controllers/TagController');

const tagController = Router();

function myMiddleware(req, res, next) {
  console.log('Middleware');
  next();
}

tagController.post('/:user_id', myMiddleware, createTag);
tagController.get('/:user_id', myMiddleware, getTags);
tagController.get('/:user_id/:id', myMiddleware, getTag);
tagController.put('/:user_id/:id', myMiddleware, updateTag);
tagController.delete('/:user_id/:id', myMiddleware, deleteTag);

module.exports = tagController;