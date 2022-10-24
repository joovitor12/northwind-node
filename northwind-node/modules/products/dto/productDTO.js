class ProductDTO {
    productId;
    productName;
    supplier;
    category;
    quantityPerUnit;
    unitPrice;
    unitsInStock;
    unitsOnOrder;
    reorderLevel;
    discontinued;

    constructor(
        productId,
        productName,
        supplier,
        category,
        quantityPerUnit,
        unitPrice,
        unitsInStock,
        unitsOnOrder,
        reorderLevel,
        discontinued
    ) {
        this.productId = productId;
        this.productName = productName;
        this.supplier = supplier;
        this.category = category;
        this.quantityPerUnit = quantityPerUnit;
        this.unitPrice = unitPrice;
        this.unitsInStock = unitsInStock;
        this.unitsOnOrder = unitsOnOrder;
        this.reorderLevel = reorderLevel;
        this.discontinued = discontinued;
    }

    static toProductDTO(productModel) {
        const {
            productId,
            productName,
            supplier,
            category,
            quantityPerUnit,
            unitPrice,
            unitsInStock,
            unitsOnOrder,
            reorderLevel,
            discontinued
        } = productModel.dataValues;

        return new ProductDTO(
            productId,
            productName,
            supplier,
            category,
            quantityPerUnit,
            unitPrice,
            unitsInStock,
            unitsOnOrder,
            reorderLevel,
            discontinued
        )
    }

    static manyToProductDTO(productsModel) {
        const productsDTO = [];
        for(let iterator = 0; iterator < productsModel.length; iterator++) {
            productsDTO.push(ProductDTO.toProductDTO(productsModel[iterator]));
        }

        console.log(productsModel);
        return productsDTO;
    }
}

module.exports = ProductDTO;


