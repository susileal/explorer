// para retorna um JSON na internet. Procurar no google - api.github.com/users/diego3g
// endpoint - local que vai chegar com a aplicação
// fetch - vai buscar qualquer coisa na internet e é uma promessa
// then - então vai transformar o dado em JSON

export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(({login, name, public_repos, followers}) => (
            {
              login,
              name,
              public_repos,
              followers
            }))  
  }
}