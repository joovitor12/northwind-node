const MissingDataProduct = require("../errors/MissingDataProductException");
const ProductDTO = require("../dto/productDTO");

class CreateProductUseCase {
    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(product) {
        const productCreated = await this.productRepository.save(product);

        if (productCreated == null) {
            throw new MissingDataProduct();
        }

        return ProductDTO.toProductDTO(productCreated);
    }
}

module.exports = CreateProductUseCase;
