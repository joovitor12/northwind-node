class CustomerDTO {
    customerId;
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
        customerId,
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
        this.customerId = customerId;
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
        const customersDTO = [];
        for (let i = 0; i < customerModel.length; i++) {
            customersDTO.push(CustomerDTO.toCustomerDTO(customersDTO[i]));
        }

        console.log(customerModel);
        return customersDTO;
    }
}

module.exports = CustomerDTO;