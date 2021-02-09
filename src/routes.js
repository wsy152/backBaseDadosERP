const express = require ('express');

const routes = express.Router();

const userController = require('./routers/controllers/usuarioController')

routes.get('/users',userController.index);


module.exports = routes;