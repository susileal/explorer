const express = require("express");

const routes = require("./routes");


const app = express();
app.use(express.json());

// acessar as rotas, fala para a aplicação usar as rotas que estão no routes
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));