// o index será usado para fazer a importações para outros arquivos
// a missão do index vai ser reunir todas as rotas (ou grupos de rotas) da aplicação, que estão separadas por arquivos

const { Router } = require("express");

const usersRouter = require("./user.routes")

// inicializando o Router

const routes = Router();

// todas vez que for acessado /users vai ser direcionado para usersRouter que está importando o "./user.routes" 
// routes vai conter todas as rotas da aplicação

routes.use("/users", usersRouter);


module.exports = routes;