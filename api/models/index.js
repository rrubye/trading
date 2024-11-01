const { Sequelize } = require('sequelize')
const DB = require('../config/database')

const sequelize = new Sequelize(DB.db_name, DB.user, DB.password, {
    host: DB.host,
    dialect: DB.dialect,
    operatorsAliases: false,

    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false
    },

    pool: {
        max: DB.pool.acquire.max,
        mon: DB.pool.min,
        acquire: DB.pool.acquire,
        idle: DB.pool.idle
    }
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize)

module.exports = db