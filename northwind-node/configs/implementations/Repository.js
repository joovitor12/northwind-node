const ProductNotFoundException = require("../../modules/products/errors/productNotFoundException");

class Repository {
    _model;

    constructor(model) {
        this._model = model.getModel();
    }

    async save(item) {
        const itemCreated = await this._model.create(item);
        return itemCreated;
    }

    async delete(id) {
        const itemFinded = await this._model.findByPk(id);

        if(itemFinded == null) {
            throw new ProductNotFoundException();
        }

        await itemFinded.destroy();
        return itemFinded;
    }

    async find() {
        return await this._model.findAll();
    }

    async update(id, item) {
        const itemFinded = await this._model.findByPk(id);

        if(itemFinded == null) {
            throw new ProductNotFoundException();
        }

        const itemUpdated = {
            ...itemFinded,
            ...item
        }

        await itemFinded.update(itemUpdated);
        return itemUpdated;
    }
}

module.exports = Repository;
