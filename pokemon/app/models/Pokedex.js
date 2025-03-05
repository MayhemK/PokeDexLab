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
  }
}


// Response.data.sprites.img