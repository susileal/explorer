// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load(){
    this.entries = [
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '120000'
      },

      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '76',
        followers: '120000'
      }
  
    ]
  }

  delete(user) {
    // Higher-order functions (map, filter, find, reduce) - são funções de alta ordem
    // filter - filtro. Vai rodar uma função para cada entrada
    // filter - se alguma função retornar falso eu vou remover e deixar o array vazio
    // filter - respeita oprincipio da imutabilidade
    const filteredEntreis = this.entries
    .filter(entry => entry.login !== user.login)
  }
}
// classe que vai criar a visualização e eventos do html
// FavoritesView - vai construir a visualização e extends (extender) a favorites
//  super(root) é como se estivesse criando o link entre os dois

// o this.root é a teg app - console.log(this.root)
export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  // construindo o html pelo js

  update() {
   this.removeAllTr()

   // dados será um array contendo um objeto
   // entries = entradas

  
    
    this.entries.forEach (user => {
      // cada vez que entrar vai pegar uma row e transformar em this.creatRow()

      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      //onclinck é apentas para um evento
      // confirm - é um boleano V ou F

      row.querySelector('.remove').onclick = () => {
        const isok = confirm('Tem certeza que deseja deletar essa linha?')
        
        if (isok) {
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




