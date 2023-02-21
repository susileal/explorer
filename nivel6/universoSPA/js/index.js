import {Router} from './router.js'
import { Backgrounds } from "./events.js";
import { linkHome, linkUniverse, linkExploration } from "./elements.js";

const backgrounds = Backgrounds({
  linkHome,
  linkUniverse,
  linkExploration,
});

if (linkHome) {
  linkHome.addEventListener("click", function () {
    backgrounds.backgroundHome();
  });
}

if (linkUniverse) {
  linkUniverse.addEventListener("click", function () {
    backgrounds.backgroundUniverse();
  });
}

if (linkExploration) {
  linkExploration.addEventListener("click", function () {
    backgrounds.backgroundExploration();
  });
}


    const router = new Router()
    router.add("/", "/pages/home.html")
    router.add("/universe", "/pages/universe.html")
    router.add("/exploration", "/pages/exploration.html")
    router.add(404, "/pages/404.html")


    router.handle()

    window.onpopstate = () => router.handle()
    window.route = (href) => router.route(href)




