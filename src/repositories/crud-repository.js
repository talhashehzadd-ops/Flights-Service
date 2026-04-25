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
    
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response;
    
    }

    //obtains a single query from the table using the primary key
    async get(data) {
        const response = await this.model.findByPk(data);
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