const Repository = require('../../../configs/implementations/Repository')
const Customer = require('../../../models/customers')

class CustomersRepository extends Repository {
    repository;

    constructor(connection) {
        const customerModel = new Customer();
        customerModel.createModel(connection);
        super(customerModel);
        this.repository = customerModel.getModel();
    }

    async findOne(id) {
        return await this.repository.findByPk(id);
    }
}

module.exports = CustomersRepository;
