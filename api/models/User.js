module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    role_id: Sequelize.INTEGER,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    middle_name: Sequelize.STRING,
    dob: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    monthly_income: Sequelize.INTEGER,
    passport_series_and_number: Sequelize.STRING,
    passport_division: Sequelize.STRING,
    passport_issued_by: Sequelize.STRING,
  });
  return User;
};
