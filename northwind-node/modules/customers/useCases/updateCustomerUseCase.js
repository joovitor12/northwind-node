const CustomerDTO = require('../dto/customerDTO')
const MissingDataCustomer = require('../errors/MissingDataCustomerException')

class UpdateCustomerUseCase {
    customerRepository

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(id, customer) {
        if (id == null) {
            throw new MissingDataCustomer();

        }

        const customerUpdated = await this.customerRepository.update(id, customer);

        return CustomerDTO.toCustomerDTO(customerUpdated)
    }
}

module.exports = UpdateCustomerUseCase;