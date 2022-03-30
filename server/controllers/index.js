const pool = require("../config/index");
const elasticClient = require("../elasticsearch/elasticClient");
//veritabanında field alanlarını aldık Product amacımız tamamen o verileri rahatça kullanabilmemiz
const ProductController = require("./ProductController");
const ElasticController = require("./ElasticController");

getAllProducts = ProductController.getAllProducts;

getProductsByRating = ElasticController.getProductsByRating;

getProductById = ProductController.getProductById;

getProductsByRating = ProductController.getProductsByRating;

postProduct = ProductController.postProduct;

getProductElastic = ElasticController.getProductElastic;

postProductElastic = ElasticController.postProductElastic;

module.exports = {
  getAllProducts,
  postProduct,
  getProductElastic,
  postProductElastic,
  getProductsByRating,
  getProductById,
};
