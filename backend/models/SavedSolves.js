const Sequelize = require("sequelize");
const sequelize = require("../util/db")

const Solve = sequelize.define("solve", {
  id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true
  }, 
  scramble: {
    type: Sequelize.STRING
  }, 
  solveTimeMs: {
    type: Sequelize.INTEGER
  }
})

module.exports = Solve;