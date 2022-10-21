const express = require('express');
const multer = require('multer');
const path = require('path')
const productController = require('../controllers/productController');
const {isAdmin, isAuth} = require('../util')

const router = express.Router();

//configuration of multer
const fileStorageEngine  = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'backend/uploads' )
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() +  '---' + file.originalname)
  }
}) 

//instructing to use defined storage
const upload = multer({storage: fileStorageEngine})



router.route('/create')
      .post( upload.single('image'), productController.createProduct);
      

router.route('/')
      .get(productController.getAllProducts)
      .put(productController.editProductById)


router.route('/:id')
      .get( productController.getProductById )
      .delete( productController.deleteProductById );

router.route('/category/:category')
      .get( productController.getProductByCategory);




module.exports = router