import { pokemonApi } from "../../../api/pokemonApi";
import { AppThunk } from "../..";
import {
  setPokemons,
  startLoadingPokemons,
  stopLoadingPokemons,
} from "./slices";

export const getPokemons =
  (page: number = 0): AppThunk =>
  async (dispatch, _ /*getState*/) => {
    dispatch(startLoadingPokemons());

    try {
      const { data } = await pokemonApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      setTimeout(() => {
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
        dispatch(stopLoadingPokemons());
      }, 1000);
    } catch (error) {
      dispatch(stopLoadingPokemons());
      console.log(error);
    }

    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    /*
        -- sem axios --
        const  response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await response.json();
        */
  };

export const getBackPagePokemons =
  (page: number = 0): AppThunk =>
  async (dispatch, _ /*getState*/) => {
    dispatch(startLoadingPokemons());

    try {
      const { data } = await pokemonApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      setTimeout(() => {
        dispatch(setPokemons({ pokemons: data.results, page: page - 1 }));
        dispatch(stopLoadingPokemons());
      }, 1000);
    } catch (error) {
      dispatch(stopLoadingPokemons());
      console.log(error);
    }

    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    /*
        -- sem axios --
        const  response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await response.json();
        */
  };
