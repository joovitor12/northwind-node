class Repository {
    _model;

    constructor(model) {
        this._model = model.instance();
    }

    async save(item) {
        await this._model.create(item);
    }

    async delete(id) {
        const itemFinded = await Produto.findByPk(id);
        await itemFinded.destroy();
    }

    async find() {
        return await this._model.findAll()
    }

    async findOne(id) {
        return await this._model.findByPk(id)
    }
}

module.exports = Repository;
