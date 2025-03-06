import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokedex.js";
import { api } from "../utils/Axios.js";

class PokemonService {
  async getPokemon() {
    const response = await api.get('/generation/1')
    console.log('GOT DA MONS', response.data.pokemon_species);
    const pokemon = response.data.pokemon_species.map(pojo => new Pokemon(pojo))
    AppState.pokemon = pokemon

  }
  async monByName() {
    const response = await api.get('/pokemon/${name}')
    console.log('this mon specifically', response.data);
    const pokemon = new DetailedPokemon(response.data)
    AppState.activePokemon = pokemon
  }

}


export const pokemonService = new PokemonService()