const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const winston = require("winston");
const elasticClient = require("./elasticsearch/elasticClient");
//Product için tanımlanan yol, endpoint, api uçları ya da yazdığınız url ne derseniz
const ProductRouter = require("./routers/Router");
//Veritabanına bağlantı kurmak için kullanılır

// Middleware
app.use(cors());

//Bağlantı kurulur hata varsa düşer

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
logger.error("Hata Yakaladım");

// elasticClient.ping(
//   {
//     requestTimeout: 1000,
//   },
//   function (error) {
//     if (error) {
//       console.trace("Elasticsearch'e erişilmiyor!");
//     } else {
//       console.log("Elasticsearch ayakta :)");
//     }
//   }
// );

// https://expressjs.com/en/api.html express.json([options]) tamamen body parser ile ilgili buradan okudum
app.use(express.json());

//Genel link api tanımımız localhost/api/productangelenroutelardan istediğimiz/
app.use("/api", ProductRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
