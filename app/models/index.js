const dbConfig = require('../config/db.config');
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})
sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log("db is not connected");
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./tutorial.model")(sequelize, DataTypes) 
db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re-sync done");
})

module.exports = db;