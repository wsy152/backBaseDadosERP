// //const restify = require('restify');
// //const errs = require('restify-error');
// const express = require('express');
// const server = express();

// // const server = restify.createServer({
// //   name: 'myapp',
// //   version: '1.0.0'
// // });

// const knex = require('knex')({
//   client: 'pg',
//   version: '13.1',
//   connection: {
//     host: '127.0.0.1',
//     user: 'postgres',
//     password: '[i8932trovao152]',
//     database: 'erpDataBase'
//   }
// });

// // server.use(restify.plugins.acceptParser(server.acceptable));
// // server.use(restify.plugins.queryParser());
// // server.use(restify.plugins.bodyParser());


// server.get('/', function (req, res, next) {
//   knex('empresa').then((dados) => {
//     res.send(dados);
//   }, next);
//   return next();
// });

// server.get('/show/:id_emp', function (req, res, next) {
//   const {id_emp} = req.params;
//   knex('empresa')
//     .where('id_emp',id_emp)
//     .first()
//     .then((dados) => {
//       if(!dados) return res.send(errs.BadRequestError('Nenhum registro encontrado'))
//     res.send(dados);
//   }, next);
  
// });

// server.put('/update/:id_emp', function (req, res, next) {
//   const {id_emp} = req.params;
//   knex('empresa')
//     .where('id_emp',id_emp)
//     .update(req.body)
//     .then((dados) => {
//       if(!dados) return res.send(errs.BadRequestError('Nenhum registro encontrado'))
//     res.send('Dados Atualizado com Sucesso');
//   }, next);
  
// });

// server.delete('/delete/:id_emp', function (req, res, next) {
//   const {id_emp} = req.params;
//   knex('empresa')
//     .where('id_emp',id_emp)
//     .delete()
//     .then((dados) => {
//       if(!dados) return res.send(errs.BadRequestError('Nenhum registro encontrado'))
//     res.send('Dados Excluidos');
//   }, next);
  
// });

// server.post('/create', function (req, res, next) {
//   knex('empresa')
//     .insert(req.body)
//     .then((dados) => {
//       res.send(dados);
//     }, next);
//   return next();
// });

// server.listen(8080, function (erro) {
//   if(erro) {
//     console.log('erro no servidor');    
//   } else {    
//     console.log('%s 111listening at %s', server.name, server.url);
//   }  
// });