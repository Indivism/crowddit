const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
const dbRoutes = require('./api/routes/db')
const redditRoutes = require('./api/routes/reddit')

app.use('/db', dbRoutes)
app.use('/reddit', redditRoutes)


app.use((request, response, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({ error: {
        message: error.message
    }});
})

module.exports = app;
