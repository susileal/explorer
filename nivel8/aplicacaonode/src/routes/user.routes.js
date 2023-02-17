// importando o app

const { Router } = require("express");

// inicializando o Router

const usersRoutes = Router();

// não irá usar mais a rota /users, pois está sendo importado do index

usersRoutes.post("/", (request, response) => {
 
  const { name, email, password } = request.body;

  response.json({ name, email, password });
});

// é necessário expor as rotas para que o server.js saiba onde está, já que foi retirada do arquivo
// exportando para quem quiser utilizar o arquivo
module.exports = usersRoutes;