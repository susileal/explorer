export class Router {
  // objeto vazio
  routes = {}

  add(routeName, page){
    // this.routes[routeName] = page - é um objeto com nome e valor
    this.routes[routeName] = page
  }
  route (href, event) {
    event = event || window.event 
    event.preventDefault()
    
    
    window.history.pushState({}, "", href)

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