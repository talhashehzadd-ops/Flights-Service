const express = require("express")

const {InfoController} = require("../../controllers/index")

const router  = express.Router()

router.get("/info", InfoController.info )  // with this route registration we also bind which controller or which set of middlewares should be trigerred
                                                                    // when we make a call to this paticular route 
                                                                    
module.exports = router;