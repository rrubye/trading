const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  app.use(cors);
  app.options("*", cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  require("../routes/")(app);

  return app;
};
