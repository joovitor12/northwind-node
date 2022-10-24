const CustomerNotFoundException = require('../errors/customerNotFoundException')
const MissingDataCustomer = require('../errors/MissingDataCustomerException')
const CustomerDTO = require('../dto/customerDTO')

class FindCustomerUseCase {
    customerRepository;

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(id) {
        if (id == null) {
            throw new MissingDataCustomer();
        }

        const customer = await this.customerRepository.findOne(id);

        if (customer == null) {
            throw new CustomerNotFoundException();
        }

        const customerDTO = CustomerDTO.toCustomerDTO(customer)

        return customerDTO
    }
}

module.exports = FindCustomerUseCase;
