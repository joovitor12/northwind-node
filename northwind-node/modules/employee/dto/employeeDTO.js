class EmployeeDTO {
    employeeId;
    lastName;
    firstName;
    title;
    titleOfCourtesy;
    birthDate;
    hireDate;
    address;
    city;
    region;
    postalCode;
    country;
    phone;
    extension;
    mobile;
    email;
    photo;
    notes;
    mgrId;
    photoPath;

    constructor(
        employeeId,
        lastName,
        firstName,
        title,
        titleOfCourtesy,
        birthDate,
        hireDate,
        address,
        city,
        region,
        postalCode,
        country,
        phone,
        extension,
        mobile,
        email,
        photo,
        notes,
        mgrId,
        photoPath,
    ) {
        this.employeeId = employeeId;
        this.lastName = lastName;
        this.firstName = firstName;
        this.title = title;
        this.titleOfCourtesy = titleOfCourtesy;
        this.birthDate = birthDate;
        this.hireDate = hireDate;
        this.address = address;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
        this.phone = phone;
        this.extension = extension;
        this.mobile = mobile;
        this.email = email;
        this.photo = photo;
        this.notes = notes;
        this.mgrId = mgrId;
        this.photoPath = photoPath;
    }

    static toEmployeeDTO(employeeModel) {
        const {
            employeeId,
            lastName,
            firstName,
            title,
            titleOfCourtesy,
            birthDate,
            hireDate,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            extension,
            mobile,
            email,
            photo,
            notes,
            mgrId,
            photoPath
        } = employeeModel.dataValues;

        return new EmployeeDTO(
            employeeId,
            lastName,
            firstName,
            title,
            titleOfCourtesy,
            birthDate,
            hireDate,
            address,
            city,
            region,
            postalCode,
            country,
            phone,
            extension,
            mobile,
            email,
            photo,
            notes,
            mgrId,
            photoPath
        )
    }

    static manyToEmployeeDTO(employeesModel) {
        const employeesDTO = [];
        for (let i = 0; i < employeesModel.length; i++) {
            employeesDTO.push(EmployeeDTO.toEmployeeDTO(employeesModel[i]))
        }
        console.log(employeesModel)
        return employeesDTO;
    }
}

module.exports = EmployeeDTO;