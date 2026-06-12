const service = require("../services/product.service");

exports.createProduct = async(req,res)=>{

    const product = await service.createProduct(
        req.body
    );

    res.status(201).json(product);
}


exports.getProducts = async(req,res)=>{

    const products = await service.getProducts();

    res.json(products);
}