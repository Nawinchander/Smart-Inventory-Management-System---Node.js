const repository = require("../repositories/product.repository");

class ProductService{

    async createProduct(data){
        return repository.create(data);
    }

    async getProducts(){
        return repository.findAll();
    }

}

module.exports = new ProductService();