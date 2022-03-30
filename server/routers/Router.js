const express = require("express");
//Controler'daki amacımız işlemleri parçalara ayırmak şu an sadece product olduğu için index
const Products = require("../controllers/index");
// örnek user geldiğinde const User = require('../controllers/user')
//Router nesnesi yaratıyoruz
const router = express.Router();

router.get("/getallproducts", Products.getAllProducts);
router.post("/postproduct", Products.postProduct);
router.post("/postproductelastic", Products.postProductElastic);
router.get("/getproductelastic", Products.getProductElastic);
router.get("/getProductById", Products.getProductById);
router.get("/getProductsByRating", Products.getProductsByRating);
module.exports = router;
