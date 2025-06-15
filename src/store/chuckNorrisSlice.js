import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk para obtener un chiste de Chuck Norris
export const fetchChuckNorrisJoke = createAsyncThunk(
  "chuckNorris/fetchJoke",
  async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return {
      joke: data.value,
      id: data.id,
      icon_url: data.icon_url,
      url: data.url,
    };
  }
);

const initialState = {
  joke: "",
  id: "",
  icon_url: "",
  url: "",
  status: "idle",
  error: null,
};

const chuckNorrisSlice = createSlice({
  name: "chuckNorris",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChuckNorrisJoke.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChuckNorrisJoke.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.joke = action.payload.joke;
        state.id = action.payload.id;
        state.icon_url = action.payload.icon_url;
        state.url = action.payload.url;
      })
      .addCase(fetchChuckNorrisJoke.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default chuckNorrisSlice.reducer;
