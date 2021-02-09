const express = require('express');
const knex = require('./database');
const routes = express.Router();
const userController = require('./controllers/usuarioController');



routes.get('/users',userController.index);




module.exports = routes;

