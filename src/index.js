// basic SERVER configurations goes here

const express = require('express');

const { PORT } = require('./config')

const  ApiRouter  = require ('./routes/ApiRoutes')

const app = express();

app.use("/api", ApiRouter);       // will import apiRoutes from the routes
                            // whenever someone gives url that starts with /api i will redirect all the request to the apiroutes

app.listen(PORT , ()=>{
    console.log ('Server started on PORT :',PORT);
});