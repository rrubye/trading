module.exports = (sequelize, Sequelize) => {
  const Loan = sequelize.define("loans", {
    user_id: Sequelize.INTEGER,
    request_date: Sequelize.STRING,
    loan_amount_expected: Sequelize.INTEGER,
    approval_status: Sequelize.INTEGER,
  });
  return Loan;
};
