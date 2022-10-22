class ProductController {

    constructor(
        findProductsUseCase,
        findProductUseCase,
        createProductUseCase,
        deleteProductUseCase,
        updateProductUseCase
    ) {
        this.findProductsUseCase = findProductsUseCase;
        this.findProductUseCase = findProductUseCase;
        this.createProductUseCase = createProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
        this.updateProductUseCase = updateProductUseCase;
    }

    async find() {
        return await this.findProductsUseCase.execute();
    }

    async create(product) {
        return await this.createProductUseCase.execute(product);
    }

    async findOne(id) {
        return await this.findProductUseCase.execute(id);
    }

    async delete(id) {
        return await this.deleteProductUseCase.execute(id);
    }

    async update(id, item) {
        return await this.updateProductUseCase.execute(id, item);
    }
}

module.exports = ProductController;
