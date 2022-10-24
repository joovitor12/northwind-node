const ProductNotFoundException = require('../errors/productNotFoundException');
const MissingDataProduct = require('../errors/MissingDataProductException');
const ProductDTO = require('../dto/productDTO');

class FindProductUseCase {

    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id) {
        if(id == null) {
            throw new MissingDataProduct();
        }

        const product = await this.productRepository.findOne(id);

        if(product == null) {
            throw new ProductNotFoundException();
        }

        const productDTO = ProductDTO.toProductDTO(product);

        return productDTO;
    }
}

module.exports = FindProductUseCase;
