const express = require("express")  //

const {InfoController} = require("../../controllers/index")  // destructuring the object which we exported from index.js file in controllers folder and getting the infocontroller from it
const airplaneRoutes = require ("./airplane-routes.js")  // we are importing the airplane routes because we need to register it in our main router file

const router  = express.Router() 

console.log("inside v1 index router");

router.use("/info", InfoController.info )  // with this route registration we also bind which controller or which set of middlewares should be trigerred
                                                                                               
router.use ("/airplanes", airplaneRoutes )                                                                

module.exports = router;