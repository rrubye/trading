const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = () => {
  const app = express();

  app.use(cors()); // Enables CORS
  app.use(bodyParser.json()); // Parses incoming JSON requests
  app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data

  require("../routes/")(app);

  return app;
};
