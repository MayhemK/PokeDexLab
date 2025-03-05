import { AppState } from '../AppState.js'


export class Pokemon {
  constructor(data) {
    this.type = data.types
    // this.stats.hp = data.stats.hp
    // this.stats.attack = data.stats.attack
    // this.stats.defense = data.stats.defense
    // this.stats.speed = data.stats.speed
    // this.sprites.front_default = data.sprites.front_default   front url
    // this.sprites.back_default = data.sprites.back_default    back url
    this.weight = data.weight
    this.height = data.height
    this.region = data.region
  }


  get monListTemplate() {
    return `
    <h2>Kanto 151</h2>
            <ul>
              <li>Agumon</li>
              <li>Armadillomon</li>
              <li>Impmon</li>
              <li>Elecmon</li>
              <li>Elecmon</li>
              <li>Gabumon</li>
              <li>Otamamon</li>
              <li>Gaomon</li>
              <li>Bulbasaur</li>
              <li>Guilmon</li>
              <li>Kudamon</li>
              <li>Keramon</li>
              <li>Armadillomon</li>
              <li>Gotsumon</li>
              <li>Goblimon</li>
              <li>Gomamon</li>
              <li>Patamon</li>
              <li>Gazimon</li>
              <li>Gomamon</li>
              <li>Impmon</li>
            </ul>
    `
  }
}


// Response.data.sprites.img