class CustomerController {

    constructor(
        findCustomersUseCase,
        findCustomerUseCase,
        createCustomerUseCase,
        deleteCustomerUseCase,
        updateCustomerUseCase,
        findCustomerByCountryUseCase
    ) {
        this.findCustomersUseCase = findCustomersUseCase;
        this.findCustomerUseCase = findCustomerUseCase;
        this.createCustomerUseCase = createCustomerUseCase;
        this.deleteCustomerUseCase = deleteCustomerUseCase;
        this.updateCustomerUseCase = updateCustomerUseCase;
        this.findCustomerByCountryUseCase = findCustomerByCountryUseCase;
    }

    async find() {
        return await this.findCustomersUseCase.execute();
    }

    async create(customer) {
        return await this.createCustomerUseCase.execute(customer);
    }

    async findOne(id) {
        return await this.findCustomerUseCase.execute(id);
    }

    async delete(id) {
        return await this.deleteCustomerUseCase.execute(id);
    }

    async update(id, customer) {
        return await this.updateCustomerUseCase.execute(id, customer);
    }

    async findByCountry(country) {
        return await this.findCustomerByCountryUseCase.execute(country);
    }

}

module.exports = CustomerController;
