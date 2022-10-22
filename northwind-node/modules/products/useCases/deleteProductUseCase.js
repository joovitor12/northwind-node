const ProductDTO = require("../dto/productDTO");
const MissingDataProduct = require("../errors/MissingDataProductException");

class DeleteProductUseCase {
    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id) {
        if(id == null) {
            throw new MissingDataProduct();
        }

        const productDeleted = await this.productRepository.delete(id);

        return ProductDTO.toProductDTO(productDeleted);
    }
}

module.exports = DeleteProductUseCase;
