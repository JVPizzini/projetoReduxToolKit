import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonProps {
  name: string;
  url: string;
}

export interface LitsPokemonProps {
  page: number;
  pokemons: PokemonProps[];
  isLoading?: boolean;
}

const initialState: LitsPokemonProps = {
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
    stopLoadingPokemons: (state /*,action*/) => {
      state.isLoading = false;
    },
    setPokemons: (state, action: PayloadAction<LitsPokemonProps>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemons, stopLoadingPokemons, setPokemons } =
  pokemonSlice.actions;
