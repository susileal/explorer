import {Router} from './router.js'

    const router = new Router()
    router.add("/", "/pages/home.html")
    router.add("/universe", "/pages/universe.html")
    router.add("/exploration", "/pages/exploration.html")
    router.add(404, "/pages/404.html")


    router.handle()

    window.onpopstate = () => router.handle()
    window.route = () => router.route()


    /* Pilares da orientação a objetos
    Herança:

    Toda função dentro de uma classe é chamada de metodo
    Todo e qualquer variável dentro de uma classe é chamada de atributo
    Ex:

    class Passaro {
      voar() {
        alert('voar')
      }
    }
    
    class Pato extends Passaro{
      constructor(){
        super()
      }
    }

    class Galinha extends Passaro {
       constructor(){
        super()
      }

      // Polimofismo
      voar() {
        alert('nao voa tao bem')
      }
    }

    const pato = new Pato()
    pato.voar()

    const galinha = new Galinha()
    pato.galinha()
    */


 

