class EmployeeTerritoryDTO {
    employeeId;
    territoryId;

    constructor(employeeId, territoryId) {
        this.employeeId = employeeId;
        this.territoryId = territoryId;
    }

    static toEmployeeTerritoryDTO(employeeTerritoryModel) {
        const { employeeId, territoryId } = employeeTerritoryModel.dataValues;

        return new EmployeeTerritoryDTO(
            employeeId, territoryId
        )

    }

    static manyToEmployeeTerritoryDTO(employeesTerritoryModel) {
        const employeesTerritoryDTO = [];
        for (let i = 0; i < employeesTerritoryModel.length; i++) {
            employeesTerritoryDTO.push(EmployeeTerritoryDTO.toEmployeeTerritoryDTO(employeesTerritoryModel[i]))
        }

        console.log(employeesTerritoryModel)
        return employeesTerritoryDTO;
    }
}

module.exports = EmployeeTerritoryDTO;