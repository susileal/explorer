// hash - função que gera a criptografia

const { hash } = require("bcryptjs");

const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {

  async create(request, response){
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
 
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
 
    if(checkUserExists){
      throw new AppError("Este e-mail já está em uso");
    }

  // antes de cadastrar um usuário no banco
  // é necessário passar dois parâmetros a senha e o fator de complexidade

    const hashedPassword = await hash(password, 8)


    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  // rota para atualizar o usuário
  async update(request, response){
    const { name, email } = request.body;
    const { id } = request.params;

    // conexão com o banco de dados
    const database = await sqliteConnection();

    // procurando usuário

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    // se o usuário não existir
    if(!user){
      throw new AppError("Usuário não encontrado");
    }

    // verificar se a pessoa está tentando colocar um email que já existe

    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    // tentando mudar o email para um que já existe
    if(userWithUpdateEmail && userWithUpdateEmail.id != user.id){
      throw new AppError("Este email já está em uso");
    }

    // se não está tentando fazer os dois ifs então:
    // user.name = name pega o user.name e muda para o nome que foi passado, o mesmo com o email
    user.name = name;
    user.email = email;
    
    // executar o update
    // atualize na tabela de usuário e defina(SET)
    // nex date - gera a data atual do próprio servidor

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      updated_at = ?
      WHERE id = ?`,

      // passando o array
      [user.name, user.email, new Date(), id]
    );

    // retornar o status de sucesso

    return response.json();
  }

}
module.exports = UsersController;