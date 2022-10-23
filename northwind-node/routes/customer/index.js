const { Router, response } = require('express')
const CustomerFactory = require('../../modules/customers/factory/customerServiceFactory')

class CustomerRouter {

    customerController;
    routes;

    constructor(database) {
        this.customerController = new CustomerFactory(database.getConnection()).createCustomerController()
        this.routes = Router()

        this.routes.get('/:id', async(request, response) => {
            const { id } = request.params;
            const customer = await this.customerController.findOne(id)
            return response.json(customer)
        })

        this.routes.get('/', async(request, response) => {
            const customers = await this.customerController.find();
            return response.json(customers)
        })

        this.routes.post('/', async(request, response) => {
            const customer = await this.customerController.create(request.body);
            return response.json(customer)
        })

        this.routes.delete('/:id', async(request, response) => {
            const { id } = request.params;
            const customer = await this.customerController.delete(id);
            return response.json(customer)
        })

        this.routes.put('/:id', async(request, response) => {
            const { id } = request.params;
            const customer = await this.customerController.update(id, request.body)
            return response.json(customer)
        })
    }

    getRoutes() {
        return this.routes;
    }


}

module.exports = CustomerRouter;