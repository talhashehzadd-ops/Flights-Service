//here we can actually see that index.js file 

module.exports = {
     InfoController : require('./info-controller'),  // key value i.e, exported an object inside whihch we have infocontroller as key value pair
                                                     // whihch requires the export of infocontroller .js
     AboutController : require ("./about-controller"),

     AirplaneController : require ("./airplane-controller")
         }
