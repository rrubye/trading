const userRoutes = require("./user");
const loanRoutes = require("./loan");

module.exports = (app) => {
  userRoutes(app);
  loanRoutes(app);
};
