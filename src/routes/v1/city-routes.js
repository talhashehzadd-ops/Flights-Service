const { CityController} = require("../../controllers/index");  // we are importing the city controller because we need to create an instance of that class and call the functions of that class
const { CityMiddlewares } = require("../../middlewares")

const express = require("express");


const router = express.Router();


// /api/v1/city POST request to create a new city
router.post("/",
         CityMiddlewares.validateCreateRequest,
         CityController.createCity)




module.exports = router;