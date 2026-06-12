const Product = require("../models/mongo/Product");

class ProductRepository{

    async create(data){
        return await Product.create(data);
    }

    async findAll(){
        return await Product.find();
    }

    async findById(id){
        return await Product.findById(id);
    }

}

module.exports = new ProductRepository();