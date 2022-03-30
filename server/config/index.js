const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres", //process.env.USERNAME
  host: "localhost",
  database: "e-store",
  password: "Onur_321",
  port: 5432,
});

module.exports = pool;
