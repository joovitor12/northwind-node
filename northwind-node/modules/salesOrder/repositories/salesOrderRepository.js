const Repository = require('../../../configs/implementations/Repository');
const SalesOrder = require("../../../models/salesOrder");

class SalesOrderRepository extends Repository {

    repository;

    constructor(connection, customerModel, employeeModel, shipperModel) {
        const salesOrderModel = new SalesOrder();
        salesOrderModel.createModel(connection);
        super(salesOrderModel);
        this.repository = salesOrderModel.getModel();

        this.customerModel = customerModel.createModel(connection);
        this.employeeModel = employeeModel.createModel(connection);
        this.shipperModel = shipperModel.createModel(connection);
    }

    async generateRelatory(shipperId) {
        return await this.repository.sequelize.query(`call SP_SHIPPER_SELLS_RELATORIO(\"${shipperId}\")`);
    }

    async findWithRelations() {
        return await this._model.findAll(
            {
                include: [
                    this.customerModel,
                    this.employeeModel,
                    this.shipperModel
                ]
            });
    }

    async findOne(id) {
        return await this._model.findByPk(id,
            {
                include: [
                    this.customerModel,
                    this.employeeModel,
                    this.shipperModel
                ]
            });
    }
}


module.exports = SalesOrderRepository;
