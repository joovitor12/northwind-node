class CustCustDemographicsDTO {
    custId;
    customerTypeId;

    constructor(custId, customerTypeId) {
        this.custId = custId;
        this.customerTypeId = customerTypeId;
    }

    static toCustCustDemographicsDTO(custCustDemographicsModel) {
        const { custId, customerTypeId } = custCustDemographicsModel.dataValues;

        return new CustCustDemographicsDTO(
            custId, customerTypeId
        )
    }

    static manyToCustCustDemographicsDTO(custsCustsDemographicsModel) {
        const custsCustsDemographicsDTO = [];
        for (let i = 0; custsCustsDemographicsDTO.length; i++) {
            custsCustsDemographicsDTO.push(CustCustDemographicsDTO.toCustCustDemographicsDTO(custsCustsDemographicsModel[i]))
        }

        console.log(custsCustsDemographicsModel)
        return custsCustsDemographicsDTO;
    }


}

module.exports = CustCustDemographicsDTO;