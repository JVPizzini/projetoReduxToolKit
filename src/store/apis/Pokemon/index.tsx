import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PokemonsProps {
  name: string;
  url: string;
}

export type PokemonList = PokemonsProps[];

export const pokemonsApi = createApi({
  reducerPath: "pokemons",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/`,
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonsProps, string>({
      query: (pokemon) => `/pokemon/${pokemon}`,
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonsApi;
