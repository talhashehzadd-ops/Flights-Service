const {StatusCodes} = require ("http-status-codes");                       // we are importing the http status codes because we need to use the status codes in our error handling
const { CityRepository } = require ("../repositories/index")          // we are importing the airplane repository because we need to create an instance of that class and call the functions of that class

const AppError  = require("../utils/error/app-error");                  // we are importing the app error class because we need to create an instance of that class and throw the error in case of any error in our code

const cityRepository = new CityRepository();  

async function createCity (data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        console.log(error.name);
        if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
            // const explanation = error.errors.map((err) => {err.message});

            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}






















// async function getCities(){
//   try {
//   const city = await CityRepository.getAll();
//   return city;
//   } catch (error) {
//           throw new AppError("Cannot fetch data of all cities", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function getCity (id){
//     try {
//         const city = await CityRepository.get(id);  
//         return city;
//     } catch (error) {
//         if (error.statusCode == StatusCodes.NOT_FOUND) {
//         throw new AppError("The city you requested is not present", StatusCodes.NOT_FOUND); // here we are storing StatusCodes.NOT_FOUND value in the variable statusCode
//     }
//        throw new AppError("Cannot fetch data of the city", StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }



module.exports = {
    createCity
}