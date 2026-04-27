// All the query realted stuff will reside in this repository
const { StatusCodes } = require("http-status-codes"); // we are importing the http status codes because we need to use the status codes in our error handling

const { logger } = require ("../config");
const AppError = require("../utils/error/app-error"); // we are importing the app error class because we need to create an instance of that class and throw the error in case of any error in our code

class CrudRepository {
    constructor(model) {
        this.model = model; //  
    }

    // To create something 
    async create(data) {
            const response = await this.model.create(data); 
            return response;       
    }

    // To delete something
    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if (!response){
            throw new AppError("Not able to find the resource with the given id",StatusCodes.NOT_FOUND); 
        }
        return response;
    
    }

    //obtains a single query from the table using the primary key
    async get(data) {
        const response = await this.model.findByPk(data);  // here we are finding by primary key that means data should be a primary key
        if (!response){
            throw new AppError("Not able  to find the resource with the given id", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    //obtains all the queries from the table
    // findall always returns an array, even if there is only one element in the table
    async getAll() { // no data is required because we want to get all the data from the table, we are not applying any filter
            const response = await this.model.findAll();
            return response;
        
    }

    // To update something
    async update(id, data) {  
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        
    }
}

module.exports = CrudRepository;