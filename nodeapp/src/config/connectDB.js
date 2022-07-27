const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sernapp", "root", null, {
  host: "localhost",
  port: "3306",
  dialect: "mysql"
});
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connnec OK FROM CONNECTDB.JS");
  } catch (error) {
    console.log("ERROR FROM CONNECTDB.JS")
    console.error("Unable to connect to the database", error);
  }
};
module.exports = connectDB;
