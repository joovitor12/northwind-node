const Repository = require('../../../configs/interfaces/Repository')
const Customer = require('../../../models/customers')

class CustomersRepository extends Repository {
    repository;

    constructor(connection) {
        const customerModel = new Customer(connection)
        super(customerModel)
        this.repository = customerModel.getModel()
    }
}

module.exports = CustomersRepository;