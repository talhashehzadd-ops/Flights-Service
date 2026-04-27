const { StatusCodes} = require ("http-status-codes")  // we are importing the status codes because we want to send the correct status code in our response
const { SuccessResponse, ErrorResponse} = require("../utils/common");

const { AirplaneService } = require("../services/index");

/**
 * POST : /airplanes
 * REQ-BODY : {modelNumber, capacity}
 */

async function createAirplane (req, res){
    try {
        const airplane = await AirplaneService.createAirplane({ // we are calling the createAirplane function of the airplane service and passing the data from the request body to that function, we are using await keyword because the createAirplane function is an asynchronous function and it returns a promise, so we need to wait for that promise to resolve and get the response from that function before we can send the response to the client
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane; //
        return res
        .status(StatusCodes.CREATED)
                .json (SuccessResponse);                       
  } 
    catch (error) {
        console.log (error);
        ErrorResponse.error = error;
        return res
                 .status(error.statusCode)
                 .json (ErrorResponse)

    }
}



/**
 * GET : /airplanes
 * REQ-BODY : {}
 */


async function getAirplanes (req, res){
    try {
        const airplane = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
                } catch (error) {
                    ErrorResponse.error = error;
                    return res
                    .status(error.statusCode)
                    .json(ErrorResponse);
                    
                }
            }
            
            

/**
 * GET : /airplanes/:id
 * REQ-BODY : {}  dont need anything in the req body
 */

async function getAirplane(req, res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
                
    }
}


/**
 * delete : /airplanes/:id
 * REQ-BODY : {}  dont need anything in the req body
 */


async function destroyAirplane (req, res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    } catch (error) {   
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
        
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}