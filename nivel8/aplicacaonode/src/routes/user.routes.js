
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();


// como UsersController é uma classe será necessário instanciar 
// new - é para dizer que está fazendo uma nova instância 

const usersController = new UsersController();


// a rota sá vai receber a request, response e repassar para o controller
// (request, response) => {} no lugar de passar tudo isso será passado usersController.create
usersRoutes.post("/", usersController.create);


module.exports = usersRoutes;