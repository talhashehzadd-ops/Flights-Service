const {StatusCodes} = require("http-status-codes")

const { ErrorResponse} = require("../utils/common");
// const { error } = require("cli"); // 

const AppError = require("../utils/error/app-error")


function validateCreateRequest (req, res, next){
    
    if ( !req.body || !req.body.name ){
        ErrorResponse.message = "city name is required ";                                        // customising the response message for better understanding of the error
        ErrorResponse.error = new AppError (['city name not found in the incoming request'], StatusCodes.BAD_REQUEST) 
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);// 
    }
    next();  
}

module.exports = {
    validateCreateRequest
}