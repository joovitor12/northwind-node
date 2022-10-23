const CustomerDTO = require('../dto/customerDTO')
const MissingDataCustomer = require('../errors/MissingDataCustomerException')

class DeleteCustomerUseCase {
    customerRepository;

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(id) {
        if (id == null) {
            throw new MissingDataCustomer();
        }

        const customerDeleted = await this.customerRepository.delete(id);

        return CustomerDTO.toCustomerDTO(customerDeleted)
    }
}

module.exports = DeleteCustomerUseCase;