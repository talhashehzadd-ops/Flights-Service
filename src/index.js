// basic SERVER configurations goes here

const express = require('express');

const { ServerConfig , logger} = require('./config')
const  ApiRouter = require ('./routes/ApiRoutes')

const app = express();


app.use (express.json());  // this is a middleware which will parse the incoming request body and convert it into json format and then we can access it in our controller functions
app.use (express.urlencoded({extended : true}))  // this is a middleware which will parse the incoming request body and convert it into urlencoded format and then we can access it in our controller functions

app.use("/api", ApiRouter);       


app.listen(ServerConfig.PORT , ()=>{
    console.log ('Server successfully started on PORT :',ServerConfig.PORT);
    logger.info("Successfully started the server", {})
});