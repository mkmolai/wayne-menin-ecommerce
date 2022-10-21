const Product = require('../models/Product')
const {getToken} = require('../util');
const info = require('../data')

exports.getAllProducts = async (req, res, next) => {

    try {
        const [products,_] = await Product.getAllProducts()
        res.status(200).json(products)
        } catch (error) {
            console.log(error)
            next(error);
        }
}

exports.getProductByCategory = async (req, res, next) => {

    try {
        let category = req.params.category;
        console.log('in getProductByCategory with: ' + category)

        const [products, _] = await Product.getProductsByCategory(category);
        if(products)
        { 
            console.log('new ppprod: ' + products[0].Name)
            res.status(200).json(products)
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
// exports.getProductByCategory = async (req, res, next) => {

//     try {
//         let category = req.params.category;
//         console.log('in getProductByCategory with: ' + category)

//         const [products, _] = await Product.getProductsByCategory(category);
//         if(products)
//         { 
//             console.log('new ppprod: ' + products[0].Name)
//             res.status(200).json(products)
//         }
        
//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// }

exports.getProductById = async (req, res, next) => {

    try {
        let product_Id = req.params.id;
        const [product, _] = await Product.getProductById(product_Id);
        if(product)
        {

            res.status(200).json(product[0])
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
 

exports.createProduct = async (req, res, next) => {
    console.log('HAVE REACHED THE SAVE PRODUCT CONTROLLER and image is: ' + req.file.path + ' and ' + req.body.name)
    try {
        const new_product_obj = req.body;
        //const {name, category, image: img, brand, description, price, stock} = req.body;
        const image = req.file.path;

        let product = new Product({...new_product_obj, image});
        // let product = new Product(name);

        product = await product.save();

        res.status(201).json({message: "Product created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editProductById = async (req, res, next) => {
    try {
        let newProductObj = req.body;
        console.log('reaching backend edit controller with product id: ' + Object.getOwnPropertyNames( newProductObj))
        let [product, _] = await Product.editProductById(newProductObj)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error)
        next(error)
    }

}

exports.deleteProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const [product, _] = await Product.deleteProductById(productId)
        res.status(201).json({message: 'Product deleted', product})
    } catch (error) {
        console.log(error)
        next(error)
    }
}