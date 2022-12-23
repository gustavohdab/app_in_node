const { Router } = require('express');

const { create, index, show } = require('../controllers/UsersController');

const usersRoutes = Router();

usersRoutes.post('/', create);
usersRoutes.get('/', index);
usersRoutes.get('/:id', show);

module.exports = usersRoutes;