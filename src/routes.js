const express = require ('express');
const routes = express.Router();
const userController = require('./routers/controllers/usuarioController');




routes.get('/users',userController.index);
routes.post('/users',userController.create);
routes.put('/users/:id_usu',userController.update);
routes.delete('/users/:id_usu',userController.delete);


module.exports = routes;