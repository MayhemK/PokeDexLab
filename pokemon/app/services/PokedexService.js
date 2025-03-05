import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokedex.js";
import { api } from "../utils/Axios.js";

class PokemonService {
  async getPokemon() {
    const response = await api.get('/region/kanto')
    console.log('GOT DA MONS', response.data);


  }
}

export const pokemonService = new PokemonService()