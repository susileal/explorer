
const { request } = require("express");
const express = require("express");

const app = express();

// através do request que obtém informações que estão sendo enviadas para o api
//  params - os parâmetros são obrigatórios
// params - passa o endereço direto na rota
// params - são utilizados para dados simples
// para passar o parâmetro é necessário colocar /:
// como recuperar a informação do parâmetro? request.params.id
// pode ser usado vários parâmetros: /message/:id/:user
// desestruturando ( const { id, user } = request.params) para não repetir: ${request.params.id}, ${request.params.user} 
app.get("/message/:id/:user", (request, response) => {

  const { id, user } = request.params

  response.send(`
  Mensagem ID: ${id}.
  Nome do usuário: ${user}.
  `);
});

// o fato dos  parâmetros não estarem na rota não impede que seja acessada a rota.
// query - os parâmetros NÃO são obrigatórios
// http://localhost:3333/users?page=5&limit=6
app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}`);
});


const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));