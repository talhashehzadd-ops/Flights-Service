const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const AppError  = require("../utils/error/app-error");                  // we are importing the app error class because we need to create an instance of that class and throw the error in case of any error in our code


/**
 * POST : /cities 
 * req-body {name: 'London'}
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
       // ErrorResponse.data = { explanation : {}}
       // const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        return res
                  .status(error.statusCode)
                  .json(ErrorResponse);
    }
}

module.exports = {
    createCity
}