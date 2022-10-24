const MissingDataCustomer = require("../errors/MissingDataCustomerException")
const CustomerDTO = require("../dto/customerDTO")

class CreateCustomerUseCase {
    customerRepository;

    constructor(customerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(customer) {
        const customerCreated = await this.customerRepository.save(customer)

        if (customerCreated == null) {
            throw new MissingDataCustomer()
        }

        return CustomerDTO.toCustomerDTO(customerCreated)
    }
}

module.exports = CreateCustomerUseCase;
