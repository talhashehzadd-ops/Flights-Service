const CrudRepository = require("./crud-repository.js"); // we are importing the crud repository because we want to extend our airplane repository from it and get all the crud functionality in our airplane repository
const { Airplane } = require("../models"); // we are importing the airplane model because we need to pass it to the parent class constructor

class AirplaneRepository extends CrudRepository { 
    constructor() {                 // we are calling the constructor of the parent class
        super(Airplane);           // the super keyword is used to access and call functions on an object's parent. 
    }
}

// now all crud functionality will be automatically given to airplane repository because it is inheriting from crud repository and we are passing the airplane model to the parent class constructor

module.exports = AirplaneRepository;

