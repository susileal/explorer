// é no server que será feito o tratamento de exceções

require("express-async-errors");

// importando o AppError

const AppError = require("./utils/AppError")

const { request, response } = require("express");
const express = require("express");

const routes = require("./routes");


const app = express();
app.use(express.json());

// acessar as rotas, fala para a aplicação usar as rotas que estão no routes
app.use(routes);

// capturando o error, requisição, a resposta e o next

app.use((error, request, response, next) => {

  // primeiro saber se o error é gerado pelo lado do cliente

  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));