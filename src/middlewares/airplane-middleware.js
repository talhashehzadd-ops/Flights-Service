const {StatusCodes} = require("http-status-codes")

const { ErrorResponse} = require("../utils/common");
// const { error } = require("cli"); // 

const AppError = require("../utils/error/app-error")

function validateCreateRequest(req, res, next){
    
    if (!req.body.modelNumber){
        ErrorResponse.message = "model number is required O"; // customising the response message for better understanding of the error
        ErrorResponse.error = new AppError (['Modle number not found in the incoming request'], StatusCodes.BAD_REQUEST) 
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);// 
    }
    next();  // if the model number is present in the request body then we will call the next middleware function which is the controller function to create a new airplane object in the database, if we don't call the next function then the request will be stuck in this middleware and will not reach the controller function and we will not be able to create a new airplane object in the database
}

module.exports = {
    validateCreateRequest
}