import { AppState } from '../AppState.js'


export class Pokemon {
  constructor(data) {
    this.type = data.types
    // this.stats.hp = data.stats.hp
    // this.stats.attack = data.stats.attack
    // this.stats.defense = data.stats.defense
    // this.stats.speed = data.stats.speed
    this.weight = data.weight
    this.height = data.height
  }
}