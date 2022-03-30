const pool = require("../config/index");

getAllProducts = async (req, res) => {
  await pool.query("SELECT * FROM products ", (error, results) => {
    if (error) {
      throw error;
    }
    return res.status(200).json(results.rows);
  });
};

getProductById = async (req, res) => {
  await pool.query(
    `SELECT * FROM products WHERE id=${id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(results.rows);
    }
  );
};

getProductsByRating = async (req, res) => {
  await pool.query(
    "SELECT * FROM products ORDER BY rating DESC",
    (error, results) => {
      if (error) {
        console.log(error);
      }
      return res.status(200).json(results.rows);
    }
  );
};

postProduct = async (req, res) => {
  await pool.query(
    `INSERT INTO products (id, title, price, description, category_id, image, stock, rating) VALUES ('${req.body.id}','${req.body.title}','${req.body.price}','${req.body.description}','${req.body.category_id}','${req.body.image}','${req.body.stock}','${req.body.rating}')`,
    (error, results) => {
      if (error) {
        console.log(error);
        throw error;
      }
      return res.status(200).json(results);
    }
  );
};

module.exports = {
  getAllProducts,
  postProduct,
  getProductById,
  getProductsByRating,
};
