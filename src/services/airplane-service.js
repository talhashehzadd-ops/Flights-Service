const {StatusCodes} = require ("http-status-codes");                       // we are importing the http status codes because we need to use the status codes in our error handling
const { AirplaneRepository } = require ("../repositories/index")                // we are importing the airplane repository because we need to create an instance of that class and call the functions of that class

const AppError  = require("../utils/error/app-error");                  // we are importing the app error class because we need to create an instance of that class and throw the error in case of any error in our code

const airplaneRepository = new AirplaneRepository();                  // we are creating an instance of the airplane repository class because we need to call the functions of that class

async function createAirplane (data){
 try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
 } 
 catch (error) {
   //console.log (error);  here we are printing the error in the console because we want to know what went wrong in our code, stack trace will give us the exact line number where the error occurred and the error message will give us the reason for the error, this will help us in debugging our code
   if (error.name == "TypeError"){
    throw new AppError("cannot create a new airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    //throw new AppError("cannot create a new airplane object", error.statusCode); // here we are throwing the error with the message and the status code, the status code will be taken from the error object that we caught in the catch block, this will help us in sending the correct status code in our response when we catch this error in our controller and send the response to the client
   } 
   throw error;
 }
}

module.exports = {createAirplane};