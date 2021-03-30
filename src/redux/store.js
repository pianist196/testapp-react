import { createStore } from 'redux'
import hotelsReducers from './reducers/hotels'

const store = createStore(hotelsReducers)

window.store = store

export default store