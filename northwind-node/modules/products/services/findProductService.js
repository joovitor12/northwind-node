const ProductNotFoundException = require('../errors/productNotFoundException');
const ProductDTO = require('../dto/productDTO')

class FindProductService {

    productRepository;

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id) {
        const product = await this.productRepository.findOne(id);

        if(product == null) {
            throw new ProductNotFoundException();
        }

        const productDTO = ProductDTO.toProductDTO(product);

        console.log(productDTO);
        return productDTO;
    }
}

module.exports = FindProductService;
