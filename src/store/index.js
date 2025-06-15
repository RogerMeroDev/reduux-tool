//1 configrar tienda 
//seimrpe se debe llamar al store la api que vayas a sacar

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import pokemonReducer from './pokemonSlice';
import chuckNorrisReducer from './chuckNorrisSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    chuckNorris: chuckNorrisReducer,
  },
});