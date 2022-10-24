class CustomerDTO {
    custId;
    companyName;
    contactName;
    contactTitle;
    address;
    city;
    region;
    postalCode;
    country;
    phone;
    fax;

    constructor(
        custId,
        companyName,
        contactName,
        contactTitle,
        address,
        city,
        region,
        postalCode,
        country,
        phone,
        fax
    ) {
        this.custId = custId;
        this.companyName = companyName;
        this.contactName = contactName;
        this.contactTitle = contactTitle;
        this.address = address;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
        this.phone = phone;
        this.fax = fax;
    }

    static toCustomerDTO(customerModel) {
        const {
            custId,
            companyName,
            contactName,
            contactTitle,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            fax
        } = customerModel;

        return new CustomerDTO(
            custId,
            companyName,
            contactName,
            contactTitle,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            fax)
    }

    static manyToCustomerDTO(productsModel) {
        const productsDTO = [];
        for (let iterator = 0; iterator < productsModel.length; iterator++) {
            productsDTO.push(CustomerDTO.toCustomerDTO(productsModel[iterator]));
        }

        console.log(productsModel);
        return productsDTO;
    }
}

module.exports = CustomerDTO;
