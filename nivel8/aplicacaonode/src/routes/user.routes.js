
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

//  myMiddleware - é uma função
// consegue extrair a requisição (request), a resposta(response) e o destino(next)

function myMiddleware(request, response, next){
  console.log("Você passou pelo Middleware")

  // Usando o Middleware para verificar se é um administrador, pois só ele terá acesso para criar um usuário

  if(!request.body.isAdmin){

    // quando encontra um return a função para e o next não será executado.
    return response.json({message: "user unauthorized"});
  }
  next()

}


// como UsersController é uma classe será necessário instanciar 
// new - é para dizer que está fazendo uma nova instância 

const usersController = new UsersController();

// aplicar o  Middleware para todas as rotas de usuário

usersRoutes.use(myMiddleware)

// a rota sá vai receber a request, response e repassar para o controller
// (request, response) => {} no lugar de passar tudo isso será passado usersController.create
usersRoutes.post("/", usersController.create);


module.exports = usersRoutes;