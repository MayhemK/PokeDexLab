import { Pokemon } from "./models/Pokedex.js";
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Pokemon[]} */
  pokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())