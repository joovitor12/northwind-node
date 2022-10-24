const CustomerDTO = require('../dto/customerDTO')

class FindCustomersUseCase {
    customerRepository;

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute() {
        const customers = await this.customerRepository.find();

        const customerDTO = CustomerDTO.manyToCustomerDTO(customers)

        console.log(customerDTO)

        return customerDTO;

    }
}

module.exports = FindCustomersUseCase;
