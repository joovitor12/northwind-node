const ProductDTO = require('../dto/productDTO')

class FindProductsUseCase {

    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        const products = await this.productRepository.find();

        const productDTO = ProductDTO.manyToProductDTO(products);

        console.log(productDTO);
        return productDTO;
    }
}

module.exports = FindProductsUseCase;
