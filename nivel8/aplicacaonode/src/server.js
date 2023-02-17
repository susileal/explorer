const express = require("express");

const app = express();
app.use(express.json());

// o POST não pode ser visualizado pelo navegar, pois usa como padrão o get.
// será usado o insomia para rodar os post - localhost:3333/users (enviando o response)
// utilizando o método POST envia a requisição pelo corpo da requisição
// o POST é utilizado, principalmente para cadastrar alguma coisa
// body, como será feito o envio pelo corpo da requisição? JSON
app.post("/users", (request, response) => {
 
  const { name, email, password } = request.body;

  response.json({ name, email, password });
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));