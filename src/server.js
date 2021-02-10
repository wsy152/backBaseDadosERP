const express = require('express');
const knex = require('./database');
const routes = require('./routes');

const app =  express();


app.use(express.json());
app.use(routes);




app.unsubscribe((req, res, next) => {
    const error = new Error('Not found');
    error.status= 404;
    next(error);
})

app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({error: error.message});

});


app.listen(8080, function (erro) {
    if(erro) {
      console.log('erro no servidor');    
    } else {    
      console.log('%s listening at %s', app.name, app.url);
    }  
  });
