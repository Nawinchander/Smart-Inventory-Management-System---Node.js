const productService = require("../services/product.service");

exports.searchByPrice = async (req, res) => {

    try {

        const price = Number(req.query.price);

        const product =
            await productService.searchByPrice(price);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


