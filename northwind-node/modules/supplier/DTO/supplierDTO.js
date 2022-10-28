class SupplierDTO {
    supplierId;
    companyName;
    contactName;
    contactTitle;
    address;
    city;
    region;
    postalCode;
    country;
    phone;
    email;
    fax;
    homePage;

    constructor(
        supplierId,
        companyName,
        contactName,
        contactTitle,
        address,
        city,
        region,
        postalCode,
        country,
        phone,
        email,
        fax,
        homePage
    ) {
        this.supplierId = supplierId;
        this.companyName = companyName;
        this.contactName = contactName;
        this.contactTitle = contactTitle;
        this.address = address;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.fax = fax;
        this.homePage = homePage
    }

    static toSupplierDTO(supplierModel) {
        const {
            supplierId,
            companyName,
            contactName,
            contactTitle,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            email,
            fax,
            homePage
        } = supplierModel;

        return new SupplierDTO(
            supplierId,
            companyName,
            contactName,
            contactTitle,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            email,
            fax,
            homePage);
    }

    static manyToCustomerDTO(supplierModel) {
        const productsDTO = [];
        for (let iterator = 0; iterator < supplierModel.length; iterator++) {
            productsDTO.push(SupplierDTO.toSupplierDTO(supplierModel[iterator]));
        }

        console.log(supplierModel);
        return productsDTO;
    }
}

module.exports = SupplierDTO;
