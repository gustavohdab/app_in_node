const { Router } = require('express');

const { create, getNotes, getNote, updateNote, deleteNote } = require('../controllers/MoviesNotesController');

const moviesNotesRoutes = Router();

function myMiddleware(req, res, next) {
  console.log('Middleware');
  next();
}

moviesNotesRoutes.post('/:user_id', myMiddleware, create);
moviesNotesRoutes.get('/:user_id', myMiddleware, getNotes);
moviesNotesRoutes.get('/:user_id/:id', myMiddleware, getNote);
moviesNotesRoutes.put('/:user_id/:id', myMiddleware, updateNote);
moviesNotesRoutes.delete('/:user_id/:id', myMiddleware, deleteNote);

module.exports = moviesNotesRoutes;