//here we can actually see that index.js file 

module.exports = {
     InfoController : require('./info-controller'),  // key value i.e, exported an object inside whihch we have infocontroller as key value pair
     AirplaneController : require ("./airplane-controller"),
     CityController : require("./city-controller")
} 
