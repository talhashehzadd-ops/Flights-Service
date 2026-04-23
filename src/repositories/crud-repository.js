// All the query realted stuff will reside in this repository
const { logger } = require ("../config");
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
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            logger.error("Something went wrong in the crud repository: destroy");
            throw error;
        }
    }

    //obtains a single query from the table using the primary key
    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
           logger.error("Something went wrong in the crud repository: get");
            throw error;
        }
    }

    //obtains all the queries from the table
    // findall always returns an array, even if there is only one element in the table

    async getAll() { // no data is required because we want to get all the data from the table, we are not applying any filter
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error("Something went wrong in the crud repository: getAll");
            throw error;
        }
    }

    // To update something
    async update(id, data) {  
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
           logger.error("Something went wrong in the crud repository: update");
            throw error;
        }
    }
}

module.exports = CrudRepository;