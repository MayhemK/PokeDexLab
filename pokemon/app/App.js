import { AuthController } from "./Auth/AuthController.js";
import { PokedexController } from "./controllers/PokedexController.js"


class App {
  authController = new AuthController()
  pokedexController = new PokedexController()

}

window['app'] = new App()


