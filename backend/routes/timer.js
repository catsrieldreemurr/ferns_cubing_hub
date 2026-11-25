const Express = require("express");

const timerController = require("../controllers/timerController")

const Router = Express.Router();

Router.get("/", timerController.TestController);
Router.post("/saveSolve", timerController.SaveSolve);

module.exports = Router;