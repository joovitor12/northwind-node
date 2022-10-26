class CustomerDemographicsDTO {
    customerTypeId;
    customerDesc;

    constructor(customerTypeId, customerDesc) {
        this.customerTypeId = customerTypeId;
        this.customerDesc = customerDesc;
    }

    static toCustomerDemographicsDTO(customerDemographicsModel) {
        const { customerTypeId, customerDesc } = customerDemographicsModel.dataValues;

        return new CustomerDemographicsDTO(
            customerTypeId, customerDesc
        )
    }

    static manyToCustomerDemographicsDTO(customersDemographicsModel) {
        const customersDemographicsDTO = [];
        for (let i = 0; i < customersDemographicsDTO.length; i++) {
            customersDemographicsDTO.push(CustomerDemographicsDTO.toCustomerDemographicsDTO(customersDemographicsModel[i]))
        }

        console.log(customersDemographicsModel)
        return customersDemographicsDTO;
    }
}

module.exports = CustomerDemographicsDTO;