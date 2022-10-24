const ProductDTO = require("../dto/productDTO");
const MissingDataProduct = require("../errors/MissingDataProductException");

class UpdateProductUseCase {
    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, item) {
        if(id == null) {
            throw new MissingDataProduct();
        }

        const productUpdated = await this.productRepository.update(id, item);

        return ProductDTO.toProductDTO(productUpdated);
    }
}

module.exports = UpdateProductUseCase;
