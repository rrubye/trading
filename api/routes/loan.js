const loanCtrl = require("../controllers/loan");

module.exports = (app) => {
  app.get("/api/loan/all", loanCtrl.getAllLoans);
  app.get("/api/loan/all/allowed", loanCtrl.getAllAllowedLoans);
  app.post("/api/loan/register", loanCtrl.register);
};
