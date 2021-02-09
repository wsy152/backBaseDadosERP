const express = require('express');
const knex = require('./database');
const routes = require('./routes');

const app =  express();


//app.use(express.json());
//app.use(routes);


app.get('/users',(req, res) =>{
    knex('usuarios').then((results)=>{
        return res.json(results)
    })
})



app.listen(8080, function (erro) {
    if(erro) {
      console.log('erro no servidor');    
    } else {    
      console.log('%s listening at %s', app.name, app.url);
    }  
  });
