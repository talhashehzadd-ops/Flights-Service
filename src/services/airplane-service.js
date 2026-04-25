const {StatusCodes} = require ("http-status-codes");                       // we are importing the http status codes because we need to use the status codes in our error handling
const { AirplaneRepository } = require ("../repositories/index")                // we are importing the airplane repository because we need to create an instance of that class and call the functions of that class

const AppError  = require("../utils/error/app-error");                  // we are importing the app error class because we need to create an instance of that class and throw the error in case of any error in our code

const airplaneRepository = new AirplaneRepository();                  // we are creating an instance of the airplane repository class because we need to call the functions of that class

async function createAirplane (data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }  catch (error) {
      if (error.name == "SequelizeValidationError") { 
          let explanation = [];
          error.errors.forEach((err) => {
              explanation.push(err.message);
          }); 
          throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      } 
      throw new AppError("Cannot create a new airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplanes(){
  try {
    const airplane = await airplaneRepository.getAll();
    return airplane;
  } catch (error) {
      throw new AppError("Cannot fetch data of all airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAirplane (id){
   try {
    const airplane = await airplaneRepository.get(id);
  return airplane;  
   } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError("The airplane you requested is not present", StatusCodes.NOT_FOUND);
    }
       throw new AppError("Cannot fetch data of the airplane", StatusCodes.INTERNAL_SERVER_ERROR);
   }
  
}



module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane
}