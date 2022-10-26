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

    async findByCountry(country) {
        return await this.repository.sequelize.query(`call nome_procedimento(\"${country}\")`);
    }
}

module.exports = CustomersRepository;
