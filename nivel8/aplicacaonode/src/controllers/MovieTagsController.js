const knex = require("../database/knex");

class MovieTagsController{
  async index(request, response){

    // pegando o user_id pelo - request.params
    const { user_id } = request.params;

    // vai nas tags e filtra onde seja igual ao user_id
    const tags = await knex("movie_tags")
    .where({user_id})

    
    
    return response.json(tags);
    }


}

module.exports = MovieTagsController;
