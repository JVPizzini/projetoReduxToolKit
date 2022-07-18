import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { pokemonsApi } from "./apis/Pokemon";

import { todosApi } from "./apis/TodosApi";
import { counterSlice } from "./slices/GerenciarState";
import { pokemonSlice } from "./slices/pokemon/slices";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      todosApi.middleware,
      pokemonsApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
