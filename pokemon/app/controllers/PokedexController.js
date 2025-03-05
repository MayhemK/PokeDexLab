import { pokemonService } from "../services/PokedexService.js"
import { Pokemon } from "../models/Pokedex.js";
import { Pop } from "../utils/Pop.js"
import { AppState } from "../AppState.js";


export class PokedexController {
  constructor() {
    console.log('Pokedex Controller Loaded')
    // AppState.on('monList', this.drawPokemon)
    this.getPokemon()
    this.drawPokemon()
  }


  drawPokemon() {
    const pokemon = AppState.pokemon
    let pokemonList = ''
    pokemon.forEach(pokemon => pokemonList += pokemon.monListTemplate)
    const monElem = document.getElementById('monList')
    monElem.innerHTML = pokemonList
    console.log('pokemon list', pokemonList);

  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
      this.drawPokemon()
    } catch (error) {
      console.error('COULD NOT GET MONS', error)
      Pop.error(error, 'Could not get MONS')
    }
  }
}
