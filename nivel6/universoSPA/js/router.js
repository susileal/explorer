/* criando classe
class Router {
  // ao criar uma função dentro de uma classe não precisa usar a palavra chave function
  
  sayHello() {
    alert("Hello")
  }
}


// usando a classe para criar um objeto
// tira uma fotografia das propriedades e valores que está dentro da classe e joga para o objeto (router)
// Um dos princípios da orientação a objetos é não precisar recriar código e sim fazer reuso deles.

const router = new Router()
const router1 = new Router()

router.sayHello()
router1.sayHello()

// falso, apresar da classe ser a mesma a instância é outra.
console.log(router === router1)

*/

class Router {

  // routeName -  "/" - propriedade
  // page - "/pages/home.html" - valor
  add(routeName, page){
    this.routes[routeName] = page
  }
  route (event) {
    event = event || window.event 
    event.preventDefault()
    
    
    window.history.pushState({}, "", event.target.href)

    // toda vez que for fazer uma refer~encia dentro de uma classe é necessário usar a paravra 'this'
    // this - este
    this.handle()
  }

  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

   
   fetch(route)
   .then(data => data.text())
   .then(html => {
    document.querySelector('#app').innerHTML = html
   })
  }
}