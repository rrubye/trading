module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    name: Sequelize.STRING,
  });
  return Role;
};
