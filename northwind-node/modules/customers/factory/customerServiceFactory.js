const FindCustomersUseCase = require('../useCases/findCustomersUseCase')
const FindCustomerUseCase = require('../useCases/findCustomerUseCase')
const CreateCustomerUseCase = require('../useCases/createCustomerUseCase')
const DeleteCustomerUseCase = require('../useCases/deleteCustomerUseCase')
const UpdateCustomerUseCase = require('../useCases/updateCustomerUseCase')

const CustomerRepository = require('../repositories/customerRepository')
const CustomerController = require('../controllers/customerController')

class CustomerServiceFactory {
    constructor(connection) {
        this.customerRepository = new CustomerRepository(connection)
    }

    createCustomerController() {
        return new CustomerController(
            new FindCustomersUseCase(this.customerRepository),
            new FindCustomerUseCase(this.customerRepository),
            new CreateCustomerUseCase(this.customerRepository),
            new DeleteCustomerUseCase(this.customerRepository),
            new UpdateCustomerUseCase(this.customerRepository)
        )
    }
}

module.exports = CustomerServiceFactory;