import { AppState } from '../AppState.js'


export class Pokemon {
  constructor(data) {
    console.log('pokemon data', data.name);

    this.name = data.name
    this.url = data.url
    // this.stats.hp = data.stats.hp
    // this.stats.attack = data.stats.attack
    // this.stats.defense = data.stats.defense
    // this.stats.speed = data.stats.speed
    // this.sprites.front_default = data.sprites.front_default   front url
    // this.sprites.back_default = data.sprites.back_default    back url
    // this.weight = data.weight
    // this.height = data.height
    // this.region = data.region
  }


  get monListTemplate() {
    return `
          <li>${this.name}</li>
    `
  }

  getActiveTemplate() {
    return `
    
    `
  }
}


// Response.data.sprites.img