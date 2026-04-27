const express = require ("express")

const {AirplaneController} = require ("../../controllers")
const { AirplaneMiddlewares} = require("../../middlewares")

const router = express.Router();

// console.log("inside airplane routes");

// /api/v1/airlanes POST request to create a new airplane
router.post ('/', 
                AirplaneMiddlewares.validateCreateRequest,
                AirplaneController.createAirplane) 

// /api/v1/airlanes GET request to get all the airplanes
router.get("/",
        AirplaneController.getAirplanes)


// /api/v1/airlanes/:id GET request to get a single airplane by id
router.get("/:id", 
                AirplaneController.getAirplane)
                  
  
// /api/v1/airlanes/:id DELETE request to delete a single airplane by id
router.delete("/:id",
                AirplaneController.destroyAirplane)

module.exports = router;