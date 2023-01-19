// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}
// classe que vai criar a visualização e eventos do html
// FavoritesView - vai construir a visualização e extends (extender) a favorites
//  super(root) é como se estivesse criando o link entre os dois

// o this.root é a teg app - console.log(this.root)
export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)

    this.update()
  }

  // construindo o html pelo js

  update() {
   this.removeAllTr()

  
  }

  createRow() {
    const tr = document.createElement('tr')

    const content = `
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

  // colocando o conteúdo dentro do html
  tr.innerHTML = content
  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')

    // está pegando todas as linhas
    // para cada um deles que você entrar - .forEach
    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}




