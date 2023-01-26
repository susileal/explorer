import { GithubUser } from "./githubUser.js"

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()   
  }

  load(){
  
    // o parse vai modificar o JSON para um objeto que está dentro dele

    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  // JSON.stringify() - trsnaforma um objeto do JS para um tipo de objeto em texto, string
  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  // add - vai passar o value
  // add - precisa buscar o usuário no github
  // await - aguardar, espera de uma promessa, para usar essa palavra é necessário colocar no início da função a palavra async
  // quando chegar na linha await vai aguardar a promessa para continuar nas próximas linhas

  // try - é tentar
  // catch - capture
  async add(username){

    try {

      // find - encontre. Se encontrar pega essa entrada e devolve como um onjeto

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()

    } catch(error){
      alert(error.message)

    }
  }

  delete(user) {
   // não está alterando o tipo de dado, ainda é um array. Só está pegando um novo array e reatribuindo pra ele
   // apagando todo o antigo array e colocando um novo lá dentro
    const filteredEntreis = this.entries
    .filter(entry => entry.login !== user.login)

    this.entries = filteredEntreis
    this.update()
    this.save()
  }
}


// classe que vai criar a visualização e eventos do html
// FavoritesView - vai construir a visualização e extends (extender) a favorites
//  super(root) é como se estivesse criando o link entre os dois

// o this.root é a teg app - console.log(this.root)

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update() // está dando erro, vou seguir a aula
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  // construindo o html pelo js

  update() {

   this.removeAllTr()

   // dados será um array contendo um objeto
   // entries = entradas
    
    this.entries.forEach( user => {

      // cada vez que entrar vai pegar uma row e transformar em this.creatRow()

      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

     

      //onclinck é apentas para um evento
      // confirm - é um boleano V ou F

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        
        if (isOk) {
          this.delete(user)
        }
      }


      // append - elemento html criado com a DOM

      this.tbody.append(row)
    })
  
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
        <a href="https://github.com/maykbrito" target="_blank">
          <p> Mayk Brito</p>
          <span>maykybrito</span>
        </a>
      </td>
      <td class="repositories">
        76
      </td>
      <td class="followers">
        9589
      </td>
      <td>
        <button class="remove"> Remover </button>
      </td>
      `
    return tr
 
  }

  removeAllTr() {
    

    // está pegando todas as linhas
    // para cada um deles que você entrar - .forEach

    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      })
  }
}




