const express = require("./api/config/express");

const app = express();

const port = 5000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on port" + port);
});
