const loanCtrl = require("../controllers/loan");

module.exports = (app) => {
  app.post("/api/loan/register", loanCtrl.register);
};
