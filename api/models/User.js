module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    middle_name: Sequelize.STRING,
    dob: Sequelize.STRING,
    passport_series_and_number: Sequelize.STRING,
    passport_division: Sequelize.STRING,
    passport_issued_by: Sequelize.STRING,
    request_date: Sequelize.STRING,
    loan_amount: Sequelize.INTEGER,
    monthly_income: Sequelize.INTEGER,
    phone_number: Sequelize.STRING,
    email: Sequelize.STRING,
    approval_status: Sequelize.INTEGER,
  });
  return User;
};
