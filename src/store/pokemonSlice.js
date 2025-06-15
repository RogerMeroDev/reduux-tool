import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk para obtener datos de un Pokémon
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    // Selecciona solo 5 campos relevantes
    return {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      sprite: data.sprites.front_default,
    };
  }
);

const initialState = {
  pokemon: null,
  status: 'idle',
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetPokemon: (state) => {
      state.pokemon = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemon.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;