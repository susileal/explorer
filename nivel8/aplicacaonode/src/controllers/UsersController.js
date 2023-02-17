// srá usada a class, porque dentro dela permite ter várias funções
// um controller poderá no máximo ter 5 métodos/função, se for mais será melhor criar outro controller
/* a classe terá:
  * index - GET para listar vários registros;
  * show - GET para exibir um registro específico;
  * create - POST para poder criar um registro
  * update - PUT para atualizar um registro.
  * delete - DELETE para remover um registro

*/

// o controller tem a responsabilidade de lidar com processamento das informações

class UsersController {

  // é uma função, não precisa colocar a palavra reservada function na frente, pq a classe já sabe que é uma função
  create(request, response){
    const { name, email, password } = request.body;

    response.json({ name, email, password });
  }
}

module.exports = UsersController;