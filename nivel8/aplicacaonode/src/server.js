// importanto o express

const express = require("express");


// inicializando o express
// app - é a aplicação utilizando o express
// express é quem ajuda a gerenciar as requisições http(get, post, put, DELETE, patch)

const app = express();

// get - leitura
// dentro do parenteses será o endereço da rota / (raiz da api)
// request - requisição feita
// response - o recurso que pose ser utilizado para fazer a resposta
app.get("/message", (request, response) => {
  response.send("Hello, World!");
})


// qual é a porta/endereço que a app vai atender as requisições

const PORT = 3333;


// listen (ouvir) - fica observando nessa porta o que deve ser feito, que será dito na função
// Server is running on Port - O servidor está sendo executado na porta

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));