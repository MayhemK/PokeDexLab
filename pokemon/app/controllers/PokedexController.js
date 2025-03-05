import { pokemonService } from "../services/PokedexService.js"
import { Pokemon } from "../models/Pokedex.js";
import { Pop } from "../utils/Pop.js"

export class PokedexController {
  constructor() {
    console.log('Pokedex Controller Loaded')
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      console.error('COULD NOT GET MONS', error)
      Pop.error(error, 'Could not get MONS')
    }
  }
}
