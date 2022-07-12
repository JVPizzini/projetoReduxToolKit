import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterProps {
  page: number;
  pokemons: string[];
  isLoading: boolean;
}

const initialState: CounterProps = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state /*,action*/) => {
      state.isLoading = true;
    },
    StopLoadingPokemons: (state /*,action*/) => {
      state.isLoading = false;
    },
    setPokemons: (state, action /* : PayloadAction<number> */) => {
      console.log(action);
    },
  },
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemons,StopLoadingPokemons, setPokemons } = pokemonSlice.actions;
