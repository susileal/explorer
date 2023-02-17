const express = require("express");

// por padrão quando não é dito o nome do arquivo que será carregado ele carrega o arquivo com o nome index.js

const routes = require("./routes");


const app = express();
app.use(express.json());

// acessar as rotas, fala para a aplicação usar as roras que estão no routes
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));