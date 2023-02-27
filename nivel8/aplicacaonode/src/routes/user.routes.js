
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();


const usersController = new UsersController();


usersRoutes.post("/", usersController.create);

// passar o id como parâmetro
usersRoutes.put("/:id", usersController.update);


module.exports = usersRoutes;