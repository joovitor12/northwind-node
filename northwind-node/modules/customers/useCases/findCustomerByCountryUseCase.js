const CustomerDTO = require('../dto/customerDTO')
const MissingDataCustomer = require('../errors/MissingDataCustomerException')
const CustomerNotFoundException = require("../errors/customerNotFoundException");

class UpdateCustomerUseCase {
    customerRepository

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(country) {
        if (country == null) {
            throw new MissingDataCustomer("country");
        }

        const customer = await this.customerRepository.findByCountry(country);

        if (customer == null) {
            throw new CustomerNotFoundException();
        }

        const customerDTO = CustomerDTO.manyToCustomerDTO(customer)

        return customerDTO
    }
}

module.exports = UpdateCustomerUseCase;
