const SupplierDTO = require('../../supplier/DTO/supplierDTO');

class CategoryDTO {
    categoryId;
    categoryName;
    description;
    picture;

    constructor(
        categoryId,
        categoryName,
        description,
        picture,
    ) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.picture = picture;
    }

    static toCategoryDTO(categoryModel) {
        const {
            categoryId,
            categoryName,
            description,
            picture,
        } = categoryModel;

        return new CategoryDTO(
            categoryId,
            categoryName,
            description,
            picture,
        )
    }

    static manyToCategoryDTO(categoryModel) {
        const categorysDTO = [];
        for (let iterator = 0; iterator < categoryModel.length; iterator++) {
            categorysDTO.push(CategoryDTO.toCategoryDTO(categoryModel[iterator]));
        }

        console.log(categoryModel);
        return categorysDTO;
    }
}

module.exports = CategoryDTO;


