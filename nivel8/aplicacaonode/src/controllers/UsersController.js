const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  // criar funcionalidade para cadastrar novos usuários
  // para o await ficar disponível é necessário usar o async antes.
 async create(request, response){
    const { name, email, password } = request.body;

    // fazendo conexão com o banco de dados
    const database = await sqliteConnection();
  // fazendo o comando do SELECT para verificar se o usuário já existe
  // get busca por informações
  // where - onde o email seja um eamil qualquer
  // para inserir um valor de uma variável (?)
  // substitui a ? por email.
  const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
  // se o usuário existe, terá um error
  if(checkUserExists){
    throw new AppError("Este e-mail já está em uso");
  }

  // cadastrando usuário
  // run - executar uma inserção
  // INSERT INTO users - insira na tabela de usuários

  await database.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
    [name, email, password]
    );

  return response.status(201).json();
  }
}
module.exports = UsersController;