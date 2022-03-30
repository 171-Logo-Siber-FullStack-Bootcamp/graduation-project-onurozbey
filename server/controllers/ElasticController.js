const elasticClient = require("../elasticsearch/elasticClient");

getProductElastic = (req, res) => {
  elasticClient.search(
    {
      index: "product",
      body: {
        query: {
          match_phrase_prefix: {
            title: req.query.s, // column : variable gibi düşün
          },
        },
      },
    },
    (err, rest) => {
      if (err) {
        console.log(err);
      } else {
        element = [];
        for (let index = 0; index < rest.hits.hits.length; index++) {
          element.push(rest.hits.hits[index]._source);
        }
        return res.status(200).json(element);
      }
    }
  );
};

postProductElastic = (req, res) => {
  elasticClient.index(
    {
      index: "product",
      type: "products",
      body: req.body,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        return res.status(201).json(req.body);
      }
    }
  );
};

module.exports = { getProductElastic, postProductElastic };
